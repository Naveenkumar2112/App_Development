package com.example.Bank;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class BankController{
	@Autowired
	public BankRepository repo;
	
	@Autowired
	public BankService service;
	
	@GetMapping("/")
	public String abc()
	{
		return "welcome";
	}
	
	@GetMapping("/users")
	public List<Bank> getUsers()
	{
		return repo.findAll();
	}
	
	@PostMapping("/save")
	public String saveUser(@RequestBody Bank user)
	{
		repo.save(user);
		return "saved...";
	}
	
	@PutMapping("update/{id}")
	public String updateUser(@PathVariable int id,@RequestBody Bank user)
	{
		Bank updatedUser=repo.findById(id).get();
		updatedUser.setCustomerId(user.getCustomerId());
		updatedUser.setCustomerName(user.getCustomerName());
		updatedUser.setAccountNumber(user.getAccountNumber());
		updatedUser.setAccountBalance(user.getAccountBalance());
		updatedUser.setAccountType(user.getAccountType());
		updatedUser.setPhoneNumber(user.getPhoneNumber());
//		updatedUser.setAccountNumber(user.getAccountNumber());
//		updatedUser.setAccountNumber(user.getAccountNumber());
		repo.save(updatedUser);
		return "saved...";
	}
	
	@DeleteMapping("delete/{id}")
	public String deleteUser(@PathVariable int id)
	{
		Bank deleteUser=repo.findById(id).get();
		repo.delete(deleteUser);
		return "Deleted Successfully...";
	}
	
	@GetMapping("/sort/{field}")
	public Iterable<Bank> sorting(@PathVariable String field){
		return service.sorting(field);
	}
	
	@GetMapping("paging/{page}/{size}")
	public Page<Bank> paging(@PathVariable int page,@PathVariable int size){
		return service.paging(page,size);
	}
	
	@GetMapping("sortwithpage/{field}/{page}/{size}")
	public Page<Bank> sortpaging(@PathVariable String field,@PathVariable int page,@PathVariable int size){
		return service.sortingandpaging(field,page,size);
	}
}