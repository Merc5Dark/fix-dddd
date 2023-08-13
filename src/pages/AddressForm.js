import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function AddressForm() {
  return (
    <div className='address-container position-abselute shadow' >
      <Form.Group className="form mb-3">
        <Form.Label >Shipping Name</Form.Label>
        <Form.Control className='shadow' placeholder="John Maker" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Street Name</Form.Label>
        <Form.Control  className='shadow' placeholder="123 Plae Grond Stret" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control className='shadow' placeholder="Vermont"/>
      </Form.Group>
      <Form.Group  className="mb-3">
        <Form.Label>State/Province</Form.Label>
        <Form.Control className='shadow' placeholder="California" />
      </Form.Group>
      <Form.Group  className="mb-3">
        <Form.Label>Country</Form.Label>
        <Form.Control className='shadow' placeholder="United States of America" />
      </Form.Group>
      <Form.Group>

      <Form.Check className="ms-auto" aria-label="check"/>
      <Form.Label>
        Save this as your default adress
        </Form.Label>
      </Form.Group>

      <Form.Group>
      <Button className='w-100 btn-dark' variant="btn" size="lg">
        Add Adress
      </Button>
      </Form.Group>

      <div>
        <a href="">Back</a> 
       
        <a> Secure Connection</a> 
      </div>

    </div>
  );
}

export default AddressForm;