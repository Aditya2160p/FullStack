package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.example.demo.model.CarBros;
import java.util.*;
public interface CarbrosRepo extends JpaRepository<CarBros,Long> {
	@Query("select c from CarBros c where c.model=:model")
	public List<CarBros> findbyModel(@Param("model")String model);
}
