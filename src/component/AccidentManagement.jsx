import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

const URL = import.meta.env.VITE_GOOGLE_SHEET_URL;
const DEFAULT_FORM_DATA = {
  date: new Date().toLocaleString("en-GB"),
  title: "",
  firstName: "",
  surname: "",
  vehicleReg: "",
  dob: "",
  houseNumber: "",
  addressLine1: "",
  postcode: "",
  phone: "",
  insurer: "",
  otherDriverName: "",
  otherDriverVehicleReg: "",
  otherDriverAddress: "",
  otherDriverContact: "",
  otherDriverInsurer: "",
  validInsurance: "",
  incidentDate: "",
  incidentTime: "",
  incidentLocation: "",
  weather: "",
  description: "",
  agree: false,
};

const _ = (o) => JSON.parse(JSON.stringify(o));

// https://purecoinsurance.co.uk/accident-management-quotation-from/

const AccidentManagementForm = () => {
  const [formData, setFormData] = useState(() => _(DEFAULT_FORM_DATA));
  const [inProgress, setInProgress] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const res = await _sendToGoogleSheet(
        new URLSearchParams(formData).toString()
      );

      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }
      setInProgress(false);
      setSuccess(true);
      setIsFormSubmitted(true);
      setFormData(_(DEFAULT_FORM_DATA));
    } catch (error) {
      setInProgress(false);
      setError(error?.message || "Something went wrong");
      setIsFormSubmitted(true);
      console.error("[ERROR] _sendToGoogleSheet");
      console.error(error?.message);
      console.error(error);
    }

    // //
    // const navigate = useNavigate();
    // navigate("/");
    // //
    // window.location.href = "/";
  };

  const _sendToGoogleSheet = async (_formData) => {
    setInProgress(true);
    setError(null);
    setSuccess(false);
    setIsFormSubmitted(false);

    const formdata = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formdata.append(key, value);
    });

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    return await fetch(URL, requestOptions);

    // return fetch(URL, requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => {
    //     console.log(result);
    //     setInProgress(false);
    //     setSuccess(true);
    //     setIsFormSubmitted(true);
    //   })
    //   .catch((error) => {
    //     setInProgress(false);
    //     setError(error?.message || "Something went wrong");
    //     setIsFormSubmitted(true);

    //     console.error("[ERROR] _sendToGoogleSheet");
    //     console.error(error?.message);
    //     console.error(error);
    //   });
  };

  return (
    <div className="container mt-5 mb-5">
      {isFormSubmitted && success && (
        <div className="row">
          <div className="col-lg-12">
            <h2>
              Thank you for your submission <Check className="text-success " />
            </h2>
            <p>
              We have received your accident details and will be in touch soon.
            </p>
            <a className="btn btn-warning" variant="warning" href="/karim-ltd/">
              Back to main page
            </a>
          </div>
        </div>
      )}

      {isFormSubmitted && error && (
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-danger">Submission Error</h2>
            <p>Error submitting the form. Please try again later.</p>
          </div>
        </div>
      )}

      {inProgress && (
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Submitting...</h2>
            <p>Please wait while we submit your details.</p>
            <div
              className="mt-2"
              style={{ fontSize: "2rem", letterSpacing: "0.5rem" }}
            >
              <span className="dot-animate">.</span>
              <span className="dot-animate">.</span>
              <span className="dot-animate">.</span>
            </div>
            <style>
              {`
                .dot-animate {
                  animation: blink 1.4s infinite both;
                }
                .dot-animate:nth-child(2) {
                  animation-delay: 0.2s;
                }
                .dot-animate:nth-child(3) {
                  animation-delay: 0.4s;
                }
                @keyframes blink {
                  0%, 80%, 100% { opacity: 0; }
                  40% { opacity: 1; }
                }
              `}
            </style>
          </div>
        </div>
      )}

      {!isFormSubmitted && !inProgress && (
        <>
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
          <Form onSubmit={handleSubmit}>
            <div className="row">
              {/* Personal Info Fields */}
              <div className="col-lg-4 bg-light p-4">
                <h3 className="mb-3 mt-4">Personal Info</h3>
                <Form.Group className="mb-3" controlId="formTitle">
                  <Form.Label>Title *</Form.Label>
                  <Form.Control
                    as="select"
                    name="title"
                    value={formData.title || ""}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select title</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Ms">Ms</option>
                    <option value="Dr">Dr</option>
                    <option value="Other">Other</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Label>Your First Name *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name"
                    name="firstName"
                    value={formData.firstName || ""}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSurname">
                  <Form.Label>Your Surname *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your surname"
                    name="surname"
                    value={formData.surname || ""}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formVehicleReg">
                  <Form.Label>Your Vehicle Registration *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter vehicle registration"
                    name="vehicleReg"
                    value={formData.vehicleReg || ""}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDob">
                  <Form.Label>Your Date of Birth *</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="dd/mm/yyyy"
                    name="dob"
                    value={formData.dob || ""}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formHouseNumber">
                  <Form.Label>Your House Number/Name *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter house number or name"
                    name="houseNumber"
                    value={formData.houseNumber || ""}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAddressLine1">
                  <Form.Label>Your First Line of Address *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first line of address"
                    name="addressLine1"
                    value={formData.addressLine1 || ""}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPostcode">
                  <Form.Label>Your Postcode *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter postcode"
                    name="postcode"
                    value={formData.postcode || ""}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label>Your Phone *</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter phone number"
                    name="phone"
                    value={formData.phone || ""}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formInsurer">
                  <Form.Label>Your Insurer (optional)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter insurer"
                    name="insurer"
                    value={formData.insurer || ""}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>

              {/* Other Driver Details */}
              <div className="col-lg-4 bg-light p-4">
                <h3 className="mb-3 mt-4">Other Driver Details</h3>
                <Form.Group className="mb-3" controlId="formOtherDriverName">
                  <Form.Label>Other Driver's Full Name *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter other driver's full name"
                    name="otherDriverName"
                    value={formData.otherDriverName || ""}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formOtherDriverVehicleReg"
                >
                  <Form.Label>Other Driver's Vehicle Registration *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter other driver's vehicle registration"
                    name="otherDriverVehicleReg"
                    value={formData.otherDriverVehicleReg || ""}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formOtherDriverAddress">
                  <Form.Label>Other Driver's Address (if known)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter other driver's address"
                    name="otherDriverAddress"
                    value={formData.otherDriverAddress || ""}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formOtherDriverContact">
                  <Form.Label>
                    Other Driver's Contact Number (if known)
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter other driver's contact number"
                    name="otherDriverContact"
                    value={formData.otherDriverContact || ""}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formOtherDriverInsurer">
                  <Form.Label>
                    Other Driver's Contact Insurer (if known)
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter other driver's insurer"
                    name="otherDriverInsurer"
                    value={formData.otherDriverInsurer || ""}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>

              {/* Accident Details */}
              <div className="col-lg-4 bg-light p-4">
                <h3 className="mb-3 mt-4">Accident Details</h3>
                <Form.Group className="mb-3" controlId="formValidInsurance">
                  <Form.Label>
                    Was a valid insurance policy in force at the time of
                    accident *
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="validInsurance"
                    value={formData.validInsurance || ""}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formIncidentDate">
                  <Form.Label>Date of Incident *</Form.Label>
                  <Form.Control
                    type="date"
                    name="incidentDate"
                    value={formData.incidentDate || ""}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formIncidentTime">
                  <Form.Label>Approximate Time of the Incident *</Form.Label>
                  <Form.Control
                    type="time"
                    name="incidentTime"
                    value={formData.incidentTime || ""}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formIncidentLocation">
                  <Form.Label>
                    Location of the Incident (street, area, city, etc) *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter location"
                    name="incidentLocation"
                    value={formData.incidentLocation || ""}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formWeather">
                  <Form.Label>Weather condition (optional)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter weather condition"
                    name="weather"
                    value={formData.weather || ""}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDescription">
                  <Form.Label>Brief description of what happened *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={15}
                    placeholder="Describe what happened"
                    name="description"
                    value={formData.description || ""}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </div>
            </div>

            <div className="row">
              {/* Agreement */}
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
                  use the data provided in accordance with the Data Protection
                  act 1998, this data will be used to provide the cheapest
                  possible quote while being shared with both offline and online
                  markets.{" "}
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </>
      )}
    </div>
  );
};

export default AccidentManagementForm;
