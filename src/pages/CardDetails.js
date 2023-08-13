import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CardDetails() {
    return (
     <div>
        <div className='card-container position-abselute shadow'>
            <h3>SELECT A CARD</h3>
            <h5>MasterCard ending in 4242</h5>
            <h5>VISA ending in 2894</h5>
        </div>

        <div className='newcard-container position-abselute shadow'>
            <h3>ADD A NEW CARD</h3>
            <Form.Group className="form mb-3">
                <Form.Label >Cardholder Name</Form.Label>
                <Form.Control className='shadow' placeholder="John Maker" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Card Number</Form.Label>
                <Form.Control  className='shadow' placeholder="5126-5987-2214-7621" />
            </Form.Group>

            <Form.Group className="form mb-3">
                <Form.Label >Expire Date</Form.Label>
                <Form.Control className='shadow' placeholder="MM/YYYY"/>
                <Form.Label>CVC</Form.Label>
                <Form.Control className='shadow' placeholder='123'/> 
            </Form.Group>

            <Form.Group>
            <Form.Check className="m-auto" aria-label="check"/>
                <Form.Label>
                Save this as your default payment method
                </Form.Label>
            </Form.Group>

            <Form.Group>
                <Button className='w-100 btn-dark' variant="btn" size="lg">
                    Add Payment Method
                </Button>
            </Form.Group>

      <div>
        <a href="">Back</a> 
       
        <a> Secure Connection</a> 
      </div>

          

        </div>
    </div>   
    );   
}

export default CardDetails;