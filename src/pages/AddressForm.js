import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function AddressForm() {
  return (
    <div className='container mt-5'>
      <Form.Group className="form mb-3">
        <Form.Label >Shipping Name</Form.Label>
        <Form.Control placeholder="John Maker" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Street Name</Form.Label>
        <Form.Control  placeholder="123 Plae Grond Stret" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control placeholder="Vermont"/>
      </Form.Group>
      <Form.Group  className="mb-3">
        <Form.Label>State/Province</Form.Label>
        <Form.Control placeholder="California" />
      </Form.Group>
      <Form.Group  className="mb-3">
        <Form.Label>Country</Form.Label>
        <Form.Control placeholder="United States of America" />
      </Form.Group>
      <Form.Group>

      <Form.Check aria-label="check"/>
      <Form.Label>
        Save this as your default adress
        </Form.Label>
      </Form.Group>

      <Form.Group>
      <Button variant="secondary" size="lg">
        Add Adress
      </Button>
      </Form.Group>

      <div>
        <a href="">Back</a> 

        <a>Secure Connection</a> 
      </div>

    </div>
  );
}

export default AddressForm;