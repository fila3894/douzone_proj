package com.example.dto;

public class SaleDetailDTO {
	// 판매 페이지에서 INSERT
	private String sale_date;
	private String sale_code;
	private String sale_group_code;
	private int item_code;
	private String item_name;
	private int item_quantity;
	private int item_sale_price;
	private int total_price;
	
	// 판매 상세 페이지에만
	private String made_company;
	private String item_division;
	private String main_ingrd;
	private String item_category;
	private String permit;

	public String getMade_company() {
		return made_company;
	}

	public void setMade_company(String made_company) {
		this.made_company = made_company;
	}

	public String getItem_division() {
		return item_division;
	}

	public void setItem_division(String item_division) {
		this.item_division = item_division;
	}

	public String getMain_ingrd() {
		return main_ingrd;
	}

	public void setMain_ingrd(String main_ingrd) {
		this.main_ingrd = main_ingrd;
	}

	public String getItem_category() {
		return item_category;
	}

	public void setItem_category(String item_category) {
		this.item_category = item_category;
	}

	public String getPermit() {
		return permit;
	}

	public void setPermit(String permit) {
		this.permit = permit;
	}

	public int getTotal_price() {
		return total_price;
	}

	public void setTotal_price(int total_price) {
		this.total_price = total_price;
	}

	public void setSale_date(String sale_date) {
		this.sale_date = sale_date;
	}

	public String getSale_date() {
		return sale_date;
	}

	public String getSale_code() {
		return sale_code;
	}

	public void setSale_code(String sale_code) {
		this.sale_code = sale_code;
	}

	public String getSale_group_code() {
		return sale_group_code;
	}

	public void setSale_group_code(String sale_group_code) {
		this.sale_group_code = sale_group_code;
	}

	public int getItem_code() {
		return item_code;
	}

	public void setItem_code(int item_code) {
		this.item_code = item_code;
	}

	public String getItem_name() {
		return item_name;
	}

	public void setItem_name(String item_name) {
		this.item_name = item_name;
	}

	public int getItem_quantity() {
		return item_quantity;
	}

	public void setItem_quantity(int item_quantity) {
		this.item_quantity = item_quantity;
	}

	public int getItem_sale_price() {
		return item_sale_price;
	}

	public void setItem_sale_price(int item_sale_price) {
		this.item_sale_price = item_sale_price;
	}

	@Override
	public String toString() {
		return "SaleDetailDTO [sale_date=" + sale_date + ", sale_code=" + sale_code + ", sale_group_code="
				+ sale_group_code + ", item_code=" + item_code + ", item_name=" + item_name + ", item_quantity="
				+ item_quantity + ", item_sale_price=" + item_sale_price + ", total_price=" + total_price
				+ ", made_company=" + made_company + ", item_division=" + item_division + ", main_ingrd=" + main_ingrd
				+ ", item_category=" + item_category + ", permit=" + permit + "]";
	}
}
