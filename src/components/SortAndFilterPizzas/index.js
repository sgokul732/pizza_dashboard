import React from "react";
import { Card, CardText } from "reactstrap";
import "./style.css";
const SortAndFilterPizzas = () => {
  return (
    <Card>
      <div className="sortBy">
        <CardText>Restaurants</CardText>
        <CardText>Relavance</CardText>
        <CardText>Filter</CardText>
      </div>
    </Card>
  );
};

export default SortAndFilterPizzas;
