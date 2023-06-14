import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
const Result = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const baseURL="http://localhost:8080/api/Vehicles"
  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(`${baseURL}/bymodel/${searchQuery}`).then((response) => {
      setSearchResults(response.data);
    });
    
  };

  return (
    <div className="container">
      <h1>Search Page</h1>
      <form onSubmit={handleSearch}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter search query"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </form>
      <>
      <table className="table table-bordered">
        <thead className="bg-dark text-white">
          <tr>
            <td>ID</td>
            <td>model</td>
            <td>manufacturer</td>
            <td>launchdate</td>
            <td>price</td>
          </tr>
        </thead>
      <thead className="bg-dark text-white">
        {searchResults.map((obj) => {
          return (
            <tr key={obj.vehicleid}>
              <td>{obj.vehicleid}</td>
              <td>{obj.model}</td>
              <td>{obj.manufacturer}</td>
              <td>{obj.launch_date}</td>
              <td>{obj.price}&nbsp;</td>
            </tr>
          );
        })}
        </thead>
      </table>
    </>
    </div>
  );
};

export default Result;
