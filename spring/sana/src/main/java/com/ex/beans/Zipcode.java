package com.ex.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="zipcode")
public class Zipcode {
	
	@Id
	@Column(name="zip_id")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="zipcode")
	@SequenceGenerator(name="zipcode", sequenceName="zip_seq", allocationSize=1)
	private int id;
	
	@Column(name="zipcode")
	private String zipcode;
	
	@Column(name="zipname")
	private String zipname;
	
	@Column(name="ziptype")
	private String ziptype;

	public Zipcode() {
		super();
	}
	
	public Zipcode(String zipcode, String zipname, String ziptype) {
		super();
		this.zipcode = zipcode;
		this.zipname = zipname;
		this.ziptype = ziptype;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	public String getZipname() {
		return zipname;
	}

	public void setZipname(String zipname) {
		this.zipname = zipname;
	}

	public String getZiptype() {
		return ziptype;
	}

	public void setZiptype(String ziptype) {
		this.ziptype = ziptype;
	}

	@Override
	public String toString() {
		return "Zipcode [id=" + id + ", zipcode=" + zipcode + ", zipname=" + zipname + ", ziptype=" + ziptype + "]";
	}
	
	
}
