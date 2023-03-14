import HomePageHeader from '../homepage/homepageheader/index';
import HeaderSearchBar from '../searchpage/searchbar/index';
import SearchList from '../searchlistpage/searchlist/index';
import FooterPage from '../footer';


function SearchListPage () {
    return (
        <div className="search-bar-container">
            <HomePageHeader />
            <HeaderSearchBar />
            <SearchList />
            <FooterPage />
        </div>
    );
}

export default SearchListPage;