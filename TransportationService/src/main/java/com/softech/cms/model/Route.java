package com.softech.cms.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "routes")
public class Route implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private Integer start;
	@ManyToOne
	@JoinColumn(name = "destination")
	private City destination;
	private BigDecimal distance;
	private BigDecimal price;
	
	public Route() {
//		super();
	}

	public Route(Integer id, Integer start, City destination, BigDecimal distance, BigDecimal price) {
//		super();
		this.id = id;
		this.start = start;
		this.destination = destination;
		this.distance = distance;
		this.price = price;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getStart() {
		return start;
	}

	public void setStart(Integer start) {
		this.start = start;
	}

	public City getDestination() {
		return destination;
	}

	public void setDestination(City destination) {
		this.destination = destination;
	}

	public BigDecimal getDistance() {
		return distance;
	}

	public void setDistance(BigDecimal distance) {
		this.distance = distance;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	
}
