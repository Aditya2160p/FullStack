package com.example.demo.service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.example.demo.model.CarBros;
import com.example.demo.model.UserData;
import com.example.demo.repository.CarbrosRepo;
import com.example.demo.repository.UserRepo;
@Service
public class CarbrosService {
	@Autowired
	CarbrosRepo carbrosRepo;
	@Autowired
	UserRepo userRepo;

	public CarBros create(CarBros vehicle) {
		return carbrosRepo.save(vehicle);
	}

	public Optional<CarBros> read(int id) {
		return carbrosRepo.findById((long) id);
	}

	public CarBros update(CarBros CarBros) {
		return carbrosRepo.save(CarBros);
	}

	public void delete(long id) {
		carbrosRepo.deleteById((long) id);
	}

	public void deleteall() {
		carbrosRepo.deleteAll();
	}

	public List<CarBros> getbymodel(String model) {
		return carbrosRepo.findbyModel(model);
	}

	public Page<CarBros> findAll(Pageable pageable) {
		return carbrosRepo.findAll(pageable);
	}

	public List<CarBros> getAllVechile(Integer pageNo, Integer pageSize, String sortBy) {
		Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));

		Page<CarBros> pagedResult = carbrosRepo.findAll(paging);

		if (pagedResult.hasContent()) {
			return pagedResult.getContent();
		} else {
			return new ArrayList<CarBros>();
		}
	}

	public Page<CarBros> pagingVehicles(int page, int pageSize) {
		Pageable paging = PageRequest.of(page, pageSize);
		return carbrosRepo.findAll(paging);
	}

	public Page<CarBros> pagingAndSortingVehicles(int pageNo, int pageSize, String field) {
		Pageable paging = PageRequest.of(pageNo, pageSize).withSort(Sort.by(field));
		return carbrosRepo.findAll(paging);
	}

	public CarBros saveVehicles(CarBros s11) {
		return carbrosRepo.save(s11);
	}

	public List<CarBros> getAllVehicle() {
		return carbrosRepo.findAll();
	}

	public void deleteByVId(int id) {
		carbrosRepo.deleteById((long) id);

	}
	public Iterable<CarBros> sortVehicleGrp(String field, String field1) {
		Sort Field = Sort.by(field);
		Sort Field1 = Sort.by(field1);
		return carbrosRepo.findAll(Field.and(Field1));
	}

	public Iterable<CarBros> sortVehicle(String field) {
		Sort Field = Sort.by(field);
		return carbrosRepo.findAll(Field);
	}

	public UserData getUserByEmail(String email) {
		return userRepo.findByEmail(email);
	}

	public Optional<CarBros> getbyId(int id) {
		return carbrosRepo.findById((long) id);
	}

	public List<CarBros> getall() {
		return carbrosRepo.findAll();
	}
}
