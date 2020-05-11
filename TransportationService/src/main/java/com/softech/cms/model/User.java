package com.softech.cms.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "accounts")
public class User implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String username, password;

	private Date createddate;

	private String status;
	
	@OneToOne
	@JoinColumn(name = "cusid")
	private Customer cusid;
	
	@OneToOne
	@JoinColumn(name = "empid")
	private Employee empid;

	@ManyToOne
	@JoinColumn(name = "divisionid")
	private Division divisionid;

	private String verifycode;

	public User() {
		super();
	}

	public User(Integer id, String username, String passowrd, Date createdDate, String status, Customer cusid,Employee empid,
			Division divisionId, String verifyCode) {
		super();
		this.id = id;
		this.username = username;
		this.password = passowrd;
		this.createddate = createdDate;
		this.status = status;
		this.cusid = cusid;
		this.empid = empid;
		this.divisionid = divisionId;
		this.verifycode = verifyCode;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getCreateddate() {
		return createddate;
	}

	public void setCreateddate(Date createddate) {
		this.createddate = createddate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}


	@JsonProperty("customer")
	public Customer getCusid() {
		return cusid;
	}

	@JsonProperty("customer")
	public void setCusid(Customer cusid) {
		this.cusid = cusid;
	}

	public Employee getEmpid() {
		return empid;
	}

	public void setEmpid(Employee empid) {
		this.empid = empid;
	}

	public Division getDivisionid() {
		return divisionid;
	}

	public void setDivisionid(Division divisionid) {
		this.divisionid = divisionid;
	}

	public String getVerifycode() {
		return verifycode;
	}

	public void setVerifycode(String verifycode) {
		this.verifycode = verifycode;
	}

	
}
