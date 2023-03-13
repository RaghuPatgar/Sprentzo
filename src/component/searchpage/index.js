import HomePageHeader from '../homepage/homepageheader/index';
import HeaderSearchBar from '../searchpage/searchbar/index';
import SearchProduct from '../searchpage/searchproduct/index';


function SearchBar () {
    return (
        <div className="search-bar-container">
            <HomePageHeader />
            <HeaderSearchBar />
            <SearchProduct />
        </div>
    );
}

export default SearchBar;