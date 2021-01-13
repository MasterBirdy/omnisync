import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import { BsStarFill, BsStar } from "react-icons/bs";

const GrantCard = ({ data, clickHandler }) => {
    const { solicitation_title, solicitation_number, solicitation_agency_url, open_date, close_date, agency, favorite } = data;

    let cardTitle = solicitation_title;

    return (
        <Card className="grant-card">
            <Card.Header>
                <h5 className="grant-card-title">{cardTitle}</h5>
            </Card.Header>
            <Card.Body>
                <Card.Title>{solicitation_number ? solicitation_number.trim() : "N/A"}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{agency}</Card.Subtitle>
                <Button variant="success" onClick={clickHandler}>
                    <div className="button-container">
                        {favorite ? <BsStarFill className="star-icon" /> : <BsStar className="star-icon" />}
                        {favorite ? "Favorited!" : "Add Favorite"}
                    </div>
                </Button>
                {solicitation_agency_url && (
                    <a href={solicitation_agency_url} target="_blank" rel="noopener noreferrer">
                        <Button className="ml-2">Link</Button>
                    </a>
                )}
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Open Date: {open_date}</ListGroupItem>
                <ListGroupItem>Close Date: {close_date}</ListGroupItem>
            </ListGroup>
        </Card>
    );
};

export default GrantCard;
