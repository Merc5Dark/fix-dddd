import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';




function AddressForm() {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget; 

    console.log(form.checkValidity(), form, event)
    debugger
    if (form.checkValidity() === false) {
      

      
    }

    setValidated(true);
  };

  
  return (
    <div className='address-container position-abselute shadow' >
      <form id='addressForm' noValidate validated={validated} onSubmit={handleSubmit}>

      <Form.Group controlId="validationCustom01" className="form mb-3">
        <Form.Label >Shipping Name</Form.Label>
        <Form.Control 
            required
            type="text"
            placeholder="John Maker"
            defaultValue="John Maker" 
            className="shadow"
        />

      </Form.Group>
      <Form.Group controlId="validationCustom02" className="mb-3">
        <Form.Label>Street Name</Form.Label>
        <Form.Control  
            required
            type="text"
            placeholder="123 Plae Grond Stret"
            defaultValue="123 Plae Grond Stret"
            className="shadow"  
        />
      </Form.Group>

      <Form.Group controlId='validationCustom03' className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control
            required
            type="text"
            placeholder="Vermont"
            defaultValue="Vermont"
            className="shadow" 
        />
        <Form.Control.Feedback type="invalid">
            Please provide a valid city.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId='validationCustom04' className="mb-3">
        <Form.Label>State/Province</Form.Label>
        <Form.Control  
            required
            type="text"
            placeholder="California"
            defaultValue="California"
            className="shadow" 
        /> 
        <Form.Control.Feedback type="invalid">
            Please provide a valid state.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId='validationCustom05' className="mb-3">
        <Form.Label>Country</Form.Label>
        <Form.Control 
        required
        type="text"
        placeholder="United States of America"
        defaultValue="United States of America"
        className="shadow" 
        />
        <Form.Control.Feedback type="invalid">
            Please provide a valid Country.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Save this as your default adress"
          feedback="You must save this as your default adress."
          feedbackType="invalid"
        />
      </Form.Group>

      <Button type='submit' value='submit' id='address-btn' href='/checkout' className='w-100 btn-dark' variant="btn" size="lg">Submit form</Button>

    
      </form>
      

      <div>
        <a href="/">Back</a> 
       
        <h5> Secure Connection</h5> 
      </div>

    </div>
  );
};

export default AddressForm;
