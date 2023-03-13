import HomePageHeader from '../homepage/homepageheader/index';
import HeaderSearchBar from '../searchpage/searchbar/index';
import SearchList from '../searchlistpage/searchlist/index';


function SearchListPage () {
    return (
        <div className="search-bar-container">
            <HomePageHeader />
            <HeaderSearchBar />
            <SearchList />
        </div>
    );
}

export default SearchListPage;