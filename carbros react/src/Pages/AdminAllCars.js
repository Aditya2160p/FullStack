import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

function AdminAllcars() {
  const baseURL = "http://localhost:8080/api/Vehicles";
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [sortingField, setSortingField] = useState("model");
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
  useEffect(() => {
    fetchCars();
  }, [currentPage, pageSize]);

  const fetchCars = () => {
    axios.get(`${baseURL}/pagingVehicles/${currentPage}/${pageSize}`)
      .then((response) => {
        setCars(response.data.content);
      })
      .catch((error) => {
        console.error("Error fetching cars", error);
      });
  };

  const handleDelete = (vehicleId) => {
    axios.delete(`${baseURL}/delete/${vehicleId}`)
      .then((res) => {
        console.log(res);
        fetchCars(); // Fetch updated car list after deletion
      })
      .catch((error) => {
        console.error("Error deleting car", error);
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
            <th>Action</th>
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
              <td>
                <a href={`/Editcar/${obj.vehicleid}`} className="btn btn-success">
                  Edit
                </a>
                <button onClick={() => handleDelete(obj.vehicleid)} className="btn btn-danger">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination buttons */}
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

export default AdminAllcars;
