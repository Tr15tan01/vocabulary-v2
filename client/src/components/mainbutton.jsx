import Button from "react-bootstrap/Button";

// eslint-disable-next-line react/prop-types
export const MainButton = ({ buttonText }) => {
  return (
    <Button variant="primary" className="w-100 btn-md shadow-sm mb-3">
      <b>{buttonText}</b>
    </Button>
  );
};
