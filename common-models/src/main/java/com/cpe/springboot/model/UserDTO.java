package com.cpe.springboot.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

public class UserDTO  implements Serializable {
   

    private static final long serialVersionUID = 2733795832476568049L;
	private Integer id;
	private String login;
	private String pwd;
	private float account;
	private String lastName;
	private String surName;
	private String email;
	private Set<Integer> cardList = new HashSet<Integer>();

	public UserDTO() {
		this.setLogin("");
		this.setPwd("");
		this.setLastName("lastname_default");
		this.setSurName("surname_default");
		this.setEmail("email_default");
	}

	public UserDTO(Integer id, String login, String pwd, float account,String lastName,String surName,String email, Set<Integer> cardList) {
		this.setId(id);
		this.setLogin(login);
		this.setPwd(pwd);
		this.setLastName(lastName);
		this.setSurName(surName);
		this.setEmail(email);
		this.setCardList(cardList);
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public float getAccount() {
		return account;
	}

	public void setAccount(float account) {
		this.account = account;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getSurName() {
		return surName;
	}

	public void setSurName(String surName) {
		this.surName = surName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Set<Integer> getCardList() {
		return cardList;
	}

	public void setCardList(Set<Integer> cardList) {
		this.cardList = cardList;
	}



 
}
