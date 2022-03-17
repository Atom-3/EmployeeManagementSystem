package com.hcl.Atom.Model;

//public class Employee {

//}
import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.hcl.Atom.Util.JsonDate;

@Entity
@Table(name = "EMPLOYEE")
public class Employee implements Serializable {
	private static final long serialVersionUID = 1;

	@Id
	@Column(name = "EMPLOYEE_ID")
	@GeneratedValue(generator = "EMPLOYEE_SEQ")
	@SequenceGenerator(name = "EMPLOYEE_SEQ", sequenceName = "EMPLOYEE_SEQ", allocationSize = 1)
	private int id;

	@Column(name = "EMPLOYEE_NAME")
	private String name;

	@Column(name = "DATE_OF_JOINING")
	@JsonDeserialize(using = JsonDate.class)
	private Date dateOfJoining;

	@Column(name = "BASIC_PAY")
	private Double basicPay;

	public Employee() {
		super();
	}

	public Employee(String name, Date dateOfJoining, Double basicPay) {
		super();
		this.name = name;
		this.dateOfJoining = dateOfJoining;
		this.basicPay = basicPay;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getDateOfJoining() {
		return dateOfJoining;
	}

	public void setDateOfJoining(Date dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
	}

	public Double getBasicPay() {
		return basicPay;
	}

	public void setBasicPay(Double basicPay) {
		this.basicPay = basicPay;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", dateOfJoining=" + dateOfJoining + ", basicPay=" + basicPay
				+ "]";
	}
}
