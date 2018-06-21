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
@Table(name="insurance")
public class Insurance {
	
	@Id
	@Column(name="insurance_id")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="insurance")
	@SequenceGenerator(name="insurance", sequenceName="insur_seq", allocationSize=1)
	private int id;
	
	@Column(name="area_city")
	private double area_city;
	
	@Column(name="area_suburban")
	private double area_suburban;
	
	@Column(name="area_rural")
	private double area_rural;
	
	@Column(name="gender_male")
	private double gender_male;
	
	@Column(name="gender_female")
	private double gender_female;
	
	@Column(name="smoker")
	private double smoker;
	
	@Column(name="diabetic")
	private double diabetic;
	
	@Column(name="hbp")
	private double hbp;
	
	@Column(name="previous_surgery")
	private double surgery;
	
	@Column(name="allergy")
	private double allergy;
	
	@Column(name="spouse")
	private double spouse;
	
	@Column(name="per_child")
	private double per_child;
	
	@Column(name="age_0_17")
	private double age_0_17;
	
	@Column(name="age_18_20")
	private double age_18_20;
	
	@Column(name="age_21_40")
	private double age_21_40;
	
	@Column(name="age_40_plus")
	private double age_40_plus;
	
	@Column(name="multiplier_bonus_long_term")
	private double long_term;
	
	@Column(name="multiplier_bonus_short_term")
	private double short_term;
	
	@Column(name="platinum")
	private double platinum;
	
	@Column(name="gold")
	private double gold;
	
	@Column(name="medi")
	private double medicare;

	public Insurance() {super();}

	public Insurance(double area_city, double area_suburban, double area_rural, double gender_male, double gender_female, double smoker,
			double diabetic, double hbp, double surgery, double allergy, double spouse, double per_child, double age_0_17, double age_18_20,
			double age_21_40, double age_40_plus, double long_term, double short_term, double platinum, double gold,
			double medicare) {
		super();
		this.area_city = area_city;
		this.area_suburban = area_suburban;
		this.area_rural = area_rural;
		this.gender_male = gender_male;
		this.gender_female = gender_female;
		this.smoker = smoker;
		this.diabetic = diabetic;
		this.hbp = hbp;
		this.surgery = surgery;
		this.allergy = allergy;
		this.spouse = spouse;
		this.per_child = per_child;
		this.age_0_17 = age_0_17;
		this.age_18_20 = age_18_20;
		this.age_21_40 = age_21_40;
		this.age_40_plus = age_40_plus;
		this.long_term = long_term;
		this.short_term = short_term;
		this.platinum = platinum;
		this.gold = gold;
		this.medicare = medicare;
	}

	public double getArea_city() {
		return area_city;
	}

	public void setArea_city(double area_city) {
		this.area_city = area_city;
	}

	public double getArea_suburban() {
		return area_suburban;
	}

	public void setArea_suburban(double area_suburban) {
		this.area_suburban = area_suburban;
	}

	public double getArea_rural() {
		return area_rural;
	}

	public void setArea_rural(double area_rural) {
		this.area_rural = area_rural;
	}

	public double getGender_male() {
		return gender_male;
	}

	public void setGender_male(double gender_male) {
		this.gender_male = gender_male;
	}

	public double getGender_female() {
		return gender_female;
	}

	public void setGender_female(double gender_female) {
		this.gender_female = gender_female;
	}

	public double getSmoker() {
		return smoker;
	}

	public void setSmoker(double smoker) {
		this.smoker = smoker;
	}

	public double getDiabetic() {
		return diabetic;
	}

	public void setDiabetic(double diabetic) {
		this.diabetic = diabetic;
	}

	public double getHbp() {
		return hbp;
	}

	public void setHbp(double hbp) {
		this.hbp = hbp;
	}

	public double getSurgery() {
		return surgery;
	}

	public void setSurgery(double surgery) {
		this.surgery = surgery;
	}

	public double getAllergy() {
		return allergy;
	}

	public void setAllergy(double allergy) {
		this.allergy = allergy;
	}

	public double getSpouse() {
		return spouse;
	}

	public void setSpouse(double spouse) {
		this.spouse = spouse;
	}

	public double getPer_child() {
		return per_child;
	}

	public void setPer_child(double per_child) {
		this.per_child = per_child;
	}

	public double getAge_0_17() {
		return age_0_17;
	}

	public void setAge_0_17(double age_0_17) {
		this.age_0_17 = age_0_17;
	}

	public double getAge_18_20() {
		return age_18_20;
	}

	public void setAge_18_20(double age_18_20) {
		this.age_18_20 = age_18_20;
	}

	public double getAge_21_40() {
		return age_21_40;
	}

	public void setAge_21_40(double age_21_40) {
		this.age_21_40 = age_21_40;
	}

	public double getAge_40_plus() {
		return age_40_plus;
	}

	public void setAge_40_plus(double age_40_plus) {
		this.age_40_plus = age_40_plus;
	}

	public double getLong_term() {
		return long_term;
	}

	public void setLong_term(double long_term) {
		this.long_term = long_term;
	}

	public double getShort_term() {
		return short_term;
	}

	public void setShort_term(double short_term) {
		this.short_term = short_term;
	}

	public double getPlatinum() {
		return platinum;
	}

	public void setPlatinum(double platinum) {
		this.platinum = platinum;
	}

	public double getGold() {
		return gold;
	}

	public void setGold(double gold) {
		this.gold = gold;
	}

	public double getMedicare() {
		return medicare;
	}

	public void setMedicare(double medicare) {
		this.medicare = medicare;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

}
