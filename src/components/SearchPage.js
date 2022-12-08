import React from "react";
import { Link } from "react-router-dom";
import Search from './Search';

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <Link to="/">
                    <img src="https://upload.wikimdeia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png" alt="google-logo" />
                </Link>
                <div className="searchPage_headerBody">
                    <Search hide />
                </div>
            </div>
        </div>
    )
}

export default SearchPage;