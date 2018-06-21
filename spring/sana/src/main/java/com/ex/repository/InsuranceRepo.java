package com.ex.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ex.beans.Insurance;

public interface InsuranceRepo extends JpaRepository<Insurance, Integer> {

	Insurance findById(int id);
}
