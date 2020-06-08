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
public class Ticket implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String ticketnumber;
	private BigDecimal price;
	private Integer routeid;
	private Date createddate;
	private String seat;
	private Integer vehicleid;
	private Integer customerid;
	private String status;
	private Date datestart;
	private Integer routetimeid;
	private String otp;
	private Integer busstopid;

	public Ticket() {
//		super();
	}

	public Ticket(Integer id, String ticketnumber, BigDecimal price, Integer routeid, Date createddate, String seat,
			Integer vehicleid, Integer customerid, String status, Date datestart, Integer routetimeid, String otp, Integer busstopid) {
		super();
		this.id = id;
		this.ticketnumber = ticketnumber;
		this.price = price;
		this.routeid = routeid;
		this.createddate = createddate;
		this.seat = seat;
		this.vehicleid = vehicleid;
		this.customerid = customerid;
		this.status = status;
		this.datestart = datestart;
		this.routetimeid = routetimeid;
		this.otp = otp;
		this.busstopid = busstopid;
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

	public Integer getRouteid() {
		return routeid;
	}

	public void setRouteid(Integer routeid) {
		this.routeid = routeid;
	}

	public Date getCreateddate() {
		return createddate;
	}

	public void setCreateddate(Date createddate) {
		this.createddate = createddate;
	}

	public String getSeat() {
		return seat;
	}

	public void setSeat(String seat) {
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

	public Integer getRoutetimeid() {
		return routetimeid;
	}

	public void setRoutetimeid(Integer routetimeid) {
		this.routetimeid = routetimeid;
	}

	public String getOtp() {
		return otp;
	}

	public void setOtp(String otp) {
		this.otp = otp;
	}

	public Integer getBusstopid() {
		return busstopid;
	}

	public void setBusstopid(Integer busstopid) {
		this.busstopid = busstopid;
	}
		
	
	

}
