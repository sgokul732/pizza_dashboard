import { ListGroup,Button, Modal ,Badge} from "react-bootstrap";
import React from "react";
import "./style.css";
const PizzaBooking = (props) => {
  const { handleClose,outlet} = props;

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
{    outlet && outlet.length && outlet.map ((entry)=>{ return <ListGroup variant="flush">
  <ListGroup.Item>{entry.outletName}
  {entry.isServicable===0 &&  <span>     <Badge color="success">Available</Badge></span>}

  </ListGroup.Item>

</ListGroup>})}
            </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PizzaBooking;
