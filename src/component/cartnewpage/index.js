import CartSelectNewItems from '../cartnewpage/cartnewselectitem/index';
import CartHeader from '../cartpage/cartheader';
import CartPayment from '../cartpage/cartpayment';
import FooterPage from '../footer';


function CartNewPage () {
    return (

        <div className="cart-new-page">
            <CartHeader />
            <CartSelectNewItems />
            <CartPayment />
            <FooterPage />
        </div>
    );
}

export default CartNewPage;