import CartHeader from '../cartpage/cartheader/index';
import CartSelectItems from '../cartpage/cartselectitem/index';
import CartPayment from '../cartpage/cartpayment/index';
import FooterPage from '../footer/index';

function CartPage () {
    return (
        <div className="cart-page-container">
            <CartHeader />
            <CartSelectItems />
            <CartPayment />
            <FooterPage />
        </div>
    );
}

export default CartPage;