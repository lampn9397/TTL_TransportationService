package com.softech.cms.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "routetimes")
public class RouteTime implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private Integer routeid;
	private String time;
	
	public RouteTime() {
//		super();
	}

	public RouteTime(Integer id, Integer routeid, String time) {
//		super();
		this.id = id;
		this.routeid = routeid;
		this.time = time;
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

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	
}
