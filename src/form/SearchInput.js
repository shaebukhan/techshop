import React from 'react';
import { useSearch } from '../Context/SearchContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoMdSearch } from 'react-icons/io';

const SearchInput = () => {
    const navigate = useNavigate();
    const [values, setValues] = useSearch();

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/search/${values.keyword}`, {
                params: { page: 1, limit: 20 } // Start with page 1 and limit 20 results per page
            });
            setValues({ ...values, results: data.results, totalPages: data.totalPages });
            navigate("/search");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form className="search-form d-flex align-items-center" onSubmit={handleSubmit}>
            <div className="search-input-wrapper">
                <input required
                    className="search-input"
                    type="text"
                    placeholder="Search..."
                    value={values.keyword}
                    onChange={(e) => setValues({ ...values, keyword: e.target.value })}
                />
                <button type="submit" className="search-button">
                    <IoMdSearch />
                </button>
            </div>
        </form>
    );
};

export default SearchInput;
