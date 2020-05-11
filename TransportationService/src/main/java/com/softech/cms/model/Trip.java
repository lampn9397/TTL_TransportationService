package com.softech.cms.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "trips")
public class Trip implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private Integer routeid;
	private Date datestart;
	private Integer vehicleid;
	private String status;
	
	public Trip() {
//		super();
	}

	public Trip(Integer id, Integer routeid, Date datestart, Integer vehicleid, String status) {
//		super();
		this.id = id;
		this.routeid = routeid;
		this.datestart = datestart;
		this.vehicleid = vehicleid;
		this.status = status;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getRouteid() {
		return routeid;
	}

	public void setRouteid(Integer routeid) {
		this.routeid = routeid;
	}

	public Date getDatestart() {
		return datestart;
	}

	public void setDatestart(Date datestart) {
		this.datestart = datestart;
	}

	public Integer getVehicleid() {
		return vehicleid;
	}

	public void setVehicleid(Integer vehicleid) {
		this.vehicleid = vehicleid;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	

	

	
}
