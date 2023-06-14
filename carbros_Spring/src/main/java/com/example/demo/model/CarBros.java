package com.example.demo.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="carbros")
public class CarBros {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Long vehicleid;
private String manufacturer;
private String model;
private String launch_date;
private String price,mileage;
public CarBros(Long vehicleid, String manufacturer, String model, String launch_date, String price, String mileage) {
	super();
	this.vehicleid = vehicleid;
	this.manufacturer = manufacturer;
	this.model = model;
	this.launch_date = launch_date;
	this.price = price;
	this.mileage = mileage;
}
public CarBros()
{
	
}
public Long getVehicleid() {
	return vehicleid;
}
public void setVehicleid(Long vehicleid) {
	this.vehicleid = vehicleid;
}
public String getManufacturer() {
	return manufacturer;
}
public void setManufacturer(String manufacturer) {
	this.manufacturer = manufacturer;
}
public String getModel() {
	return model;
}
public void setModel(String model) {
	this.model = model;
}
public String getLaunch_date() {
	return launch_date;
}
public void setLaunchdate(String launch_date) {
	this.launch_date = launch_date;
}
public String getPrice() {
	return price;
}
public void setPrice(String price) {
	this.price = price;
}
public String getMileage() {
	return mileage;
}
public void setMileage(String mileage) {
	this.mileage = mileage;
}

@Override
public String toString() {
	return "CarBros [vehicleid=" + vehicleid + ", manufacturer=" + manufacturer + ", model=" + model + ", launchdate="
			+ launch_date + ", price=" + price + ", mileage=" + mileage +  "]";
}

}
