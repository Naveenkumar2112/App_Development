package com.example.Bank;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

public class BankService{
	
	@Autowired
	BankRepository repo;
	public Iterable<Bank> sorting(String field){
		return repo.findAll(Sort.by(field));
	}
	
	public Page <Bank> paging(int page, int size) {
		Pageable paging=PageRequest.of(page, size);
		return repo.findAll(paging);
	}
	
	public Page <Bank> sortingandpaging(String field,int page, int size) {
		Pageable paging=PageRequest.of(page, size).withSort(Sort.by(field));
		return repo.findAll(paging);
	}
	
}