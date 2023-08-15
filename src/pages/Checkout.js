import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Checkout() {
    return (
        <div>
            <div className='checkout-container'>

               <div className='checkoutaddress shadow'>
                    <h3>SHIPPING ADDRESS</h3>
                    <></>
                    {/* Write JS function to save and edit adress details */}
                    <div>Adress details </div>
                    <Button className=' btn-dark' variant="btn" size="sm">
                    Change
                   </Button>
                </div>

                <div className='checkoutPayment shadow'>
                    <h3>PAYMENT METHOD</h3>
                    {/* Write JS function to save and edit payment details */}
                    <div>card details</div>
                    <Button href="/payment" className=' btn-dark' variant="btn" size="sm">
                    Change
                   </Button>
                    <h5>$ 53.21 gift card balance</h5>
                    <Form.Group>
                        <Form.Check className="m-auto" aria-label="check"/>
                        <Form.Label>
                        Save this as your default payment method
                        </Form.Label>
                     </Form.Group>
                </div>

                <div className='checkoutReview shadow'>
                    <h3>REVIEW YOUR BAG</h3>
                    {/* These need to be a javascript function */}
                    <h5>image</h5>
                    <h5>product name</h5>
                    <h5>product color</h5>
                    <h5>product description</h5>
                    <h5>rating stars</h5>
                    <h5>price</h5>
                    <h5>quantity</h5>
                    <h5>increase or decrease quantity</h5>
                </div>
            </div>

            <div className='ordersummary'>
                <h4>Order Summary</h4>
                {/* Function needs to be written */}
                <h5>Items: xxxx</h5>
                <h5>Shipping: xxxx</h5>
                <h5>Estimated GST: xxxx</h5>
                <h5>Gift card: xxx</h5>
                <h5>Order Total: xxxx</h5>
                <Button className='w-100 btn-dark' variant="btn" size="lg">
                    Place your order
                </Button>

                
            <Button className='btn-dark' variant="btn" size="lg">
                    Back
            </Button>
            </div>



           

        </div>
    )
};

export default Checkout;