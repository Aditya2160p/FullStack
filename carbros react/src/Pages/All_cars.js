import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Allcars() {
  const baseURL = "http://localhost:8080/api/Vehicles";
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [sortingField, setSortingField] = useState("model");

  useEffect(() => {
    fetchCars();
  }, [currentPage, pageSize, sortingField]);

  const fetchCars = () => {
    axios
      .get(`${baseURL}/pagingSortingVehicles/${currentPage}/${pageSize}/${sortingField}`)
      .then((response) => {
        setCars(response.data.content);
      })
      .catch((error) => {
        console.error("Error fetching cars", error);
      });
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleSortingChange = (e) => {
    setSortingField(e.target.value);
  };

  const sortFields = [
    { label: "None", value: "" },
    { label: "ID", value: "vehicleid" },
    { label: "Model", value: "model" },
    { label: "Manufacturer", value: "manufacturer" },
    { label: "Launch Date", value: "launch_date" },
    { label: "Price", value: "price" },
  ];

  return (
    <>


      <table className="table table-bordered">
        {/* Table headers */}
        <thead className="bg-dark text-white">
          <tr>
            <th>ID</th>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Launch Date</th>
            <th>Price</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {cars.map((obj) => (
            <tr key={obj.vehicleid}>
              <td>{obj.vehicleid}</td>
              <td>{obj.model}</td>
              <td>{obj.manufacturer}</td>
              <td>{obj.launch_date}</td>
              <td>{obj.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-buttons">
        <button onClick={goToPreviousPage} disabled={currentPage === 0}>
          Previous Page
        </button>
        <button onClick={goToNextPage}>Next Page</button>
        <div>
          <label htmlFor="sortingField">Sort By:</label>
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="sortDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {sortFields.find((field) => field.value === sortingField)?.label || "None"}
            </button>
            <ul className="dropdown-menu" aria-labelledby="sortDropdown">
              {sortFields.map((field) => (
                <li key={field.value}>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => setSortingField(field.value)}
                  >
                    {field.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Allcars;
