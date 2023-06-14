import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditCars() {
  const { vehicleId } = useParams();
  const [cars, setCars] = useState({});
  const baseURL = "http://localhost:8080/api/Vehicles";
  const nav=useNavigate();
  useEffect(() => {
    axios.get(`${baseURL}/byid/${vehicleId}`)
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving car details", error);
      });
  }, [vehicleId]);

  const [vehicleid, setVehicleid] = useState('');
  const [price, setPrice] = useState('');
  const [launch_date, setLaunch_date] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [mileage, setMileage] = useState('');

  useEffect(() => {
    setVehicleid(cars.vehicleid || '');
    setPrice(cars.price || '');
    setLaunch_date(cars.launch_date || '');
    setManufacturer(cars.manufacturer || '');
    setModel(cars.model || '');
    setMileage(cars.mileage || '');
  }, [cars]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const carData = {
      vehicleid,
      model,
      manufacturer,
      price,
      launch_date,
      mileage
    };
    console.log(carData);

    axios.put(`${baseURL}/update`, carData)
      .then((res) => {
        console.log(res);
        nav("/AdminAllCars")
      })
      .catch((error) => {
        console.error("Error updating car details", error);
      });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center">Car Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="vehicleid" className="form-label">Vehicle ID</label>
              <input
                type="number"
                className="form-control"
                id="vehicleid"
                name="vehicleid"
                value={vehicleid}
                onChange={(e) => { setVehicleid(e.target.value) }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="model" className="form-label">Model</label>
              <input
                type="text"
                className="form-control"
                id="model"
                name="model"
                value={model}
                onChange={(e) => { setModel(e.target.value) }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="manufacturer" className="form-label">Manufacturer</label>
              <input
                type="text"
                className="form-control"
                id="manufacturer"
                name="manufacturer"
                value={manufacturer}
                onChange={(e) => { setManufacturer(e.target.value) }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price</label>
              <input
                type="text"
                className="form-control"
                id="price"
                name="price"
                value={price}
                onChange={(e) => { setPrice(e.target.value) }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mileage" className="form-label">Mileage</label>
              <input
                type="text"
                className="form-control"
                id="mileage"
                name="mileage"
                value={mileage}
                onChange={(e) => { setMileage(e.target.value) }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="launchDate" className="form-label">Launch Date</label>
              <input
                type="text"
                className="form-control"
                id="launchDate"
                name="launchDate"
                value={launch_date}
                onChange={(e) => { setLaunch_date(e.target.value) }}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
