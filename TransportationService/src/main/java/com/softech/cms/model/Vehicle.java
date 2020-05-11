package com.softech.cms.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "vehicles")
public class Vehicle implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private int totalseat;
	private String seattype;
	private String licenseplates;
	private String vehiclenumber;
	private String model;
	private int routetimeid;
	
	public Vehicle() {
//		super();
	}

	public Vehicle(Integer id, int totalseat, String seattype, String licenseplates, String vehiclenumber, String model,
			int routetimeid) {
//		super();
		this.id = id;
		this.totalseat = totalseat;
		this.seattype = seattype;
		this.licenseplates = licenseplates;
		this.vehiclenumber = vehiclenumber;
		this.model = model;
		this.routetimeid = routetimeid;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public int getTotalseat() {
		return totalseat;
	}

	public void setTotalseat(int totalseat) {
		this.totalseat = totalseat;
	}

	public String getSeattype() {
		return seattype;
	}

	public void setSeattype(String seattype) {
		this.seattype = seattype;
	}

	public String getLicenseplates() {
		return licenseplates;
	}

	public void setLicenseplates(String licenseplates) {
		this.licenseplates = licenseplates;
	}

	public String getVehiclenumber() {
		return vehiclenumber;
	}

	public void setVehiclenumber(String vehiclenumber) {
		this.vehiclenumber = vehiclenumber;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public int getRoutetimeid() {
		return routetimeid;
	}

	public void setRoutetimeid(int routetimeid) {
		this.routetimeid = routetimeid;
	}
	
	
	
	
	
	
}
