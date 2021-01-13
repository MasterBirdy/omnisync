import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import GrantCard from "./GrantCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { chunk } from "lodash";
import download from "js-file-download";
import "./App.css";

const hashCode = (s) => s.split("").reduce((a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0);

function App() {
    const [grants, setGrants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [downloaded, setDownloaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios("/api/grants");
            const grantData = data.map((grant) => ({
                ...grant,
                favorite: false,
            }));
            setGrants(grantData);
            setLoading(false);
        };
        fetchData();
    }, []);

    const grantHandler = (number, title) => {
        setGrants((prevState) =>
            prevState.map((grant) => {
                if (grant.solicitation_number === number && grant.solicitation_title === title) {
                    return {
                        ...grant,
                        favorite: !grant.favorite,
                    };
                }
                return grant;
            })
        );
        setDownloaded(false);
    };

    const exportGrants = async () => {
        const filteredGrants = grants.filter((grant) => grant.favorite).map(({ solicitation_title, solicitation_number }) => ({ solicitation_title, solicitation_number }));
        const response = await axios.post("/api/download", {
            grants: filteredGrants,
        });
        var fileToSave = new Blob([JSON.stringify(response.data)], {
            type: "application/json",
            name: "grants.json",
        });
        download(fileToSave, "grants.json");
        setDownloaded(true);
    };

    const oneGrant = grants.some((grant) => grant.favorite);

    const rowsGrants = chunk(grants, 2);
    return (
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">OmniSync</Navbar.Brand>
                </Container>
            </Navbar>
            <Container>
                <h2 className="my-3">Grant Cards</h2>
                <h4 className="my-1">Export Grants</h4>
                <div className="mb-3">
                    <Button disabled={!oneGrant} variant={oneGrant ? "primary" : "secondary"} onClick={exportGrants}>
                        Export
                    </Button>
                    {downloaded && (
                        <p className="my-1" style={{ color: "green" }}>
                            Downloaded!
                        </p>
                    )}
                </div>
                {loading && <p>Loading...</p>}
                {!loading &&
                    rowsGrants.map((row, index) => (
                        <Row key={index} className="row-size">
                            {row.map((grant) => {
                                const id = hashCode(`${grant.solicitation_number ? "0" : grant.solicitation_number}${grant.solicitation_title}`);
                                return (
                                    <Col key={id} md={6} className="d-flex align-items-stretch cell-size">
                                        <GrantCard data={grant} clickHandler={() => grantHandler(grant.solicitation_number, grant.solicitation_title)} />
                                    </Col>
                                );
                            })}
                        </Row>
                    ))}
            </Container>
        </div>
    );
}

export default App;
