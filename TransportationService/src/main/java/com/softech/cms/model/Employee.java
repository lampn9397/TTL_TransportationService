package com.softech.cms.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employeesinformation")
public class Employee implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String name;
	private Integer divisionid;
	private String address;
	private boolean status;
	private Integer idcard;
	private Date birthday;
	private Integer vehicleid;
	private String gender;
	private String phonenumber;
	private String email;
	private Date createddate;

	public Employee(Integer id, String name, Integer divisionid, String address, boolean status, Integer idcard, Date birthday,
			Integer vehicleid, String gender, String phonenumber, String email, Date createddate) {
//		super();
		this.id = id;
		this.name = name;
		this.divisionid = divisionid;
		this.address = address;
		this.status = status;
		this.idcard = idcard;
		this.birthday = birthday;
		this.vehicleid = vehicleid;
		this.gender = gender;
		this.phonenumber = phonenumber;
		this.email = email;
		this.createddate = createddate;
	}

	public Employee() {
//		super();s
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getDivisionid() {
		return divisionid;
	}

	public void setDivisionid(Integer divisionid) {
		this.divisionid = divisionid;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public Integer getIdcard() {
		return idcard;
	}

	public void setIdcard(Integer idcard) {
		this.idcard = idcard;
	}

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public Integer getVehicleid() {
		return vehicleid;
	}

	public void setVehicleid(Integer vehicleid) {
		this.vehicleid = vehicleid;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getCreateddate() {
		return createddate;
	}

	public void setCreateddate(Date createddate) {
		this.createddate = createddate;
	}

	
}
