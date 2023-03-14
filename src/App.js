import React from 'react';
import './App.css';

import Sprentzologo from './component/homelogo';
import HomePage from './component/homepage';
import SignUpPage from './component/signup-page/index';
import SearchBar from './component/searchpage/index';
import SearchListPage from './component/searchlistpage/index';
import CartPage from './component/cartpage/index';
import CartNewPage from './component/cartnewpage/index';
import RelatedProduct from './component/relatedproduct';
import WishList from './component/wishlist';

function App() {
  return (
    <div className="App">
     {/* <Sprentzologo /> */}
     {/* <SignUpPage /> */}
     {/* <HomePage /> */}
     {/* <SearchBar /> */}
     {/* <SearchListPage /> */}
     {/* <CartPage /> */}
     {/* <CartNewPage /> */}
     {/* <RelatedProduct /> */}
     <WishList />
    </div>
  );
}

export default App;
