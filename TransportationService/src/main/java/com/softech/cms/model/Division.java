package com.softech.cms.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "divisions")
public class Division implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String name;
	private String type;
	private int divisonlevel;
	
	public Division() {
//		super();
	}

	public Division(Integer id, String name, String type, int divisonlevel) {
//		super();
		this.id = id;
		this.name = name;
		this.type = type;
		this.divisonlevel = divisonlevel;
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

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getDivisonlevel() {
		return divisonlevel;
	}

	public void setDivisonlevel(int divisonlevel) {
		this.divisonlevel = divisonlevel;
	}
	
	
	
}
