/* eslint-disable react/prop-types */
// import { PropTypes } from "prop-types";
// import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const ConfirmationModal = ({
  show,
  handleClose,
  //   handleShow,
  handleNavigate,
  confirmationText,
  rejectionText,
}) => {
  //   const setShow = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  console.log(show);

  return (
    <>
      {/* <Button variant="primary">Launch demo modal</Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            {rejectionText}
          </Button>
          <Button variant="danger" onClick={handleNavigate}>
            {confirmationText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
