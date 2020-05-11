package com.softech.cms.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "tripclosetimes")
public class TripCloseTime implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private Integer routeid;
	private Date closedate;
	private String description;
	
	public TripCloseTime() {
//		super();
	}

	public TripCloseTime(Integer id, Integer routeid, Date closedate, String description) {
//		super();
		this.id = id;
		this.routeid = routeid;
		this.closedate = closedate;
		this.description = description;
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

	public Date getClosedate() {
		return closedate;
	}

	public void setClosedate(Date closedate) {
		this.closedate = closedate;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	

	
}
