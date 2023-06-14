package com.example.demo.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.CarBros;
import com.example.demo.model.UserData;
import com.example.demo.repository.UserRepo;
import com.example.demo.service.CarbrosService;
import com.example.demo.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@RequestMapping("/api/Vehicles")
@CrossOrigin()
public class CarbrosController {
	@Autowired
	CarbrosService vservice;
	@Autowired
	UserService uservice;
	@Autowired
	UserRepo u;
	//POST CARS
	@Operation(summary="Adds a new car")
	@ApiResponses(value= {
			@ApiResponse(responseCode="201",description="car added successfully"),
			@ApiResponse(responseCode="400",description="car is invalid")})
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping("/add")
	public String pt(@RequestBody CarBros s11)
	{
		vservice.create(s11);
		return "your record saved";
	}
	//GETS ALL CARS
	@Operation (summary= "gives all values present")
	@ApiResponses (value = {@ApiResponse(responseCode = "200",description= "successful"), @ApiResponse(responseCode = "401",description= "invalid credentials"),
	@ApiResponse(responseCode = "404",description= "not found")})
	@GetMapping("/allvehicles")
	 public List<CarBros> get()
	 {
		 return vservice.getall();
	 }
	@Operation (summary= "gives all values present")
	@ApiResponses (value = {@ApiResponse(responseCode = "200",description= "successful"), @ApiResponse(responseCode = "401",description= "invalid credentials"),
	@ApiResponse(responseCode = "404",description= "not found")})
	@GetMapping(value="/bymodel/{model}", produces="application/json")
	public List<CarBros> getbymodel(@PathVariable("model") String model)
	{
		return vservice.getbymodel(model);
	}
	@Operation (summary= "gives car's details")
	@ApiResponses (value = {@ApiResponse(responseCode = "200",description= "successful"), @ApiResponse(responseCode = "401",description= "invalid credentials"),
	@ApiResponse(responseCode = "404",description= "not found")})
	@GetMapping(value="/byid/{id}")
	public Optional<CarBros> getbyid(@PathVariable("id") int id)
	{
		return vservice.read(id);
	}
	@PutMapping("/update")
	public CarBros update(@RequestBody CarBros data)
	{
		return vservice.create(data);
	}
	@Operation (summary= "Deletes cars")
	@ApiResponses (value = {@ApiResponse(responseCode = "200",description= "successful"), @ApiResponse(responseCode = "401",description= "invalid credentials"),
	@ApiResponse(responseCode = "404",description= "not found")})
	 @DeleteMapping("/delete/{id}")
	 public String delete(@PathVariable("id") int id) { 
		 vservice.delete(id);
		return "id : " + id + " is deleted";
	}
	 @GetMapping("/sortVehicles/{field}")
		public Iterable<CarBros>getVEhiclesSorted(@PathVariable("field") String field)
		{
			return vservice.sortVehicle(field);
		}
		@GetMapping("/sortVehicles/{field}/{field1}")
		public Iterable<CarBros>getVehicleswithFieldSorted(@PathVariable("field") String field,@PathVariable("field1") String field1)
		{
			return vservice.sortVehicleGrp(field,field1);
		}
		@GetMapping(value = "/pagingVehicles/{pageNo}/{pageSize}")
		Page<CarBros> vehiclePaging(@PathVariable ("pageNo") int pageno,
				@PathVariable ("pageSize") int pageSize) {
			return vservice.pagingVehicles(pageno, pageSize);

		}
		@GetMapping(value = "/pagingSortingVehicles/{pageNo}/{pageSize}/{field}")
		Page<CarBros> employeesPagingAndSorting(@PathVariable ("pageNo") int pageno,
				@PathVariable ("pageSize") int pageSize,@PathVariable ("field")String field) {
			return vservice.pagingAndSortingVehicles(pageno, pageSize,field);

		}
		@PostMapping("/login")
		public ResponseEntity<String> login(@RequestBody UserData login) {
			String username = login.getEmail();
			String password = login.getPassword();

			UserData user = u.findByEmail(username);
			if (user != null && user.getPassword().equals(password)) {
				return ResponseEntity.ok("Login successful");
			} else {
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
			}
		}
	 
}