import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const DEFAULT_FORM_DATA = {
  email: "",
  agree: false,
};

const _ = (o) => JSON.parse(JSON.stringify(o));

const AccidentManagementForm = () => {
  const [formData, setFormData] = useState(() => _(DEFAULT_FORM_DATA));

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Form submitted! Check console for details.");

    setFormData(_(DEFAULT_FORM_DATA));

    // //
    // const navigate = useNavigate();
    // navigate("/");
    // //
    window.location.href = "/";
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="mb-4">Accident Management Form</h1>
          <p>
            Please fill out the form below with details of the accident. Our
            team will review the information and get back to you as soon as
            possible.
          </p>
        </div>
      </div>
      <div className="row border">
        <div className="col-lg-12">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="I agree"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                <a href="/terms-and-conditions" target="_blank">
                  Terms and Conditions
                </a>
                {" | "}
                <a href="/privacy-policy" target="_blank">
                  Privacy Policy
                </a>{" "}
                By clicking submit, you agree your explicit consent for us to
                use the data provided in accordance with the Data Protection act
                1998, this data will be used to provide the cheapest possible
                quote while being shared with both offline and online markets.{" "}
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AccidentManagementForm;
