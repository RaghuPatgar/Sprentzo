import RelatedAllGymProduct from "./relatedallgymproduct";
import RelatedAllSportsProduct from "./relatedallsportsproduct";
import RelatedBuyGymProduct from "./relatedbuygymproduct";
import RelatedAllProduct from "./relatedproductall";
import RelatedBuyProduct from "./relatedproductbuy";
import RelatedRentProduct from "./relatedproductrent";
import RelatedRentGymProduct from "./relatedrentgymoroduct";
import SportsTitleOption from "./relatedtitleoption";
import SportsTypeOption from "./sportsoptions";




function RelatedProduct (){
    return (
        <div className="related-product-container">

            <SportsTypeOption />
            <SportsTitleOption />

            {/* <RelatedAllProduct />  */}

            {/* <RelatedRentProduct /> */}

            {/* <RelatedBuyProduct /> */}

            {/* <RelatedAllGymProduct /> */}

            {/* <RelatedRentGymProduct /> */}

            {/* <RelatedBuyGymProduct /> */}

            <RelatedAllSportsProduct />


        </div>
    );
}

export default RelatedProduct;