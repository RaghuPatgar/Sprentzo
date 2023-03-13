import HomePageHeader from '../homepage/homepageheader/index';
import HomepageBrowserButton from '../homepage/homebutton/index';
import HomePageImage from '../homepage/homepageimage/index';
import HomeProductCard from '../homepage/homeproductcard/index';
import HomeNewProduct from '../homepage/homepagenew/index';
import HomeSimilarProduct from '../homepage/homesimilarproduct/index';
import FooterPage from '../footer/index';

function HomePage() {
    return (
        <div className='homepage-container'>
            <HomePageHeader />
            <HomepageBrowserButton />
            <HomePageImage />
            <HomeProductCard />
            <HomeNewProduct />
            <HomeSimilarProduct />
            <FooterPage />
        </div>
    );
}

export default HomePage;