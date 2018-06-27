package com.springmvc.springmongodbweb.repositories;

import com.springmvc.springmongodbweb.models.Product;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, String> {
	// Anadimos unicamente findOne y delete porque el resto son manejados por CrudRepository
	@Override
	Optional<Product> findById(String id);
	
	@Override
	void delete(Product deleted);
}
