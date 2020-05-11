package com.softech.cms.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.type.descriptor.sql.SmallIntTypeDescriptor;

@Entity
@Table(name = "tickets")
public class Ticket implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String ticketnumber;
	private BigDecimal price;
	private Integer tripid;
	private Date createddate;
	private Integer seat;
	private Integer vehicleid;
	private Integer customerid;
	private String status;
	private Date datestart;
	
	public Ticket() {
//		super();
	}

	public Ticket(Integer id, String ticketnumber, BigDecimal price, Integer tripid, Date createddate, Integer seat,
			Integer vehicleid, Integer customerid, String status, Date datestart) {
		super();
		this.id = id;
		this.ticketnumber = ticketnumber;
		this.price = price;
		this.tripid = tripid;
		this.createddate = createddate;
		this.seat = seat;
		this.vehicleid = vehicleid;
		this.customerid = customerid;
		this.status = status;
		this.datestart = datestart;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTicketnumber() {
		return ticketnumber;
	}

	public void setTicketnumber(String ticketnumber) {
		this.ticketnumber = ticketnumber;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public Integer getTripid() {
		return tripid;
	}

	public void setTripid(Integer tripid) {
		this.tripid = tripid;
	}

	public Date getCreateddate() {
		return createddate;
	}

	public void setCreateddate(Date createddate) {
		this.createddate = createddate;
	}

	public Integer getSeat() {
		return seat;
	}

	public void setSeat(Integer seat) {
		this.seat = seat;
	}

	public Integer getVehicleid() {
		return vehicleid;
	}

	public void setVehicleid(Integer vehicleid) {
		this.vehicleid = vehicleid;
	}

	public Integer getCustomerid() {
		return customerid;
	}

	public void setCustomerid(Integer customerid) {
		this.customerid = customerid;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getDatestart() {
		return datestart;
	}

	public void setDatestart(Date datestart) {
		this.datestart = datestart;
	}

	
}
