package com.example.Bank;

import jakarta.persistence.*;
@Entity
@Table(name="BankDetails")
public class Bank
{
	@Id
	private int CustomerId;
	@Column
	private String CustomerName;
	@Column
	private String AccountNumber;
	@Column
	private String AccountBalance;
	@Column
	private String AccountType;
	@Column
	private int PhoneNumber;
	@Column
	private String UserName;
	@Column
	private String Password;
	public int getCustomerId() {
		return CustomerId;
	}
	public void setCustomerId(int customerId) {
		CustomerId = customerId;
	}
	public String getCustomerName() {
		return CustomerName;
	}
	public void setCustomerName(String customerName) {
		CustomerName = customerName;
	}
	public String getAccountNumber() {
		return AccountNumber;
	}
	public void setAccountNumber(String accountNumber) {
		AccountNumber = accountNumber;
	}
	public String getAccountBalance() {
		return AccountBalance;
	}
	public void setAccountBalance(String accountBalance) {
		AccountBalance = accountBalance;
	}
	public String getAccountType() {
		return AccountType;
	}
	public void setAccountType(String accountType) {
		AccountType = accountType;
	}
	public int getPhoneNumber() {
		return PhoneNumber;
	}
	public void setPhoneNumber(int phoneNumber) {
		PhoneNumber = phoneNumber;
	}
	public String getUserName() {
		return UserName;
	}
	public void setUserName(String userName) {
		UserName = userName;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	
}