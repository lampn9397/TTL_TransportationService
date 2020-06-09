package com.softech.cms.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.type.descriptor.sql.SmallIntTypeDescriptor;

@Entity
@Table(name = "faqs")
public class FAQ implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String name;
	private String fcontent;
	
	
	
	public FAQ() {
//		super();
	}



	public FAQ(Integer id, String name, String fcontent) {
		super();
		this.id = id;
		this.name = name;
		this.fcontent = fcontent;
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



	public String getFcontent() {
		return fcontent;
	}



	public void setFcontent(String fcontent) {
		this.fcontent = fcontent;
	}

	
	

}
