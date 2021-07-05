package com.example.dto;

public class ReceiveDetailDTO {
	// 테이블
	private String income_date;
	private String item_name;
	private String vendor_name;
	private String item_division;
	private int item_income_price;
	private int income_inqty;
	private int income_total_price;
	// + 재고 수량

	// 모달
	private String big_image;
	private int item_code;
	private String made_company;
	private String permit;
	private String main_ingrd;
	private String item_category;
	private int vendor_code;
	private String vendor_manager;
	private String vendor_representive_number;

	public String getIncome_date() {
		return income_date;
	}

	public void setIncome_date(String income_date) {
		this.income_date = income_date;
	}

	public String getItem_name() {
		return item_name;
	}

	public void setItem_name(String item_name) {
		this.item_name = item_name;
	}

	public String getVendor_name() {
		return vendor_name;
	}

	public void setVendor_name(String vendor_name) {
		this.vendor_name = vendor_name;
	}

	public String getItem_division() {
		return item_division;
	}

	public void setItem_division(String item_division) {
		this.item_division = item_division;
	}

	public int getItem_income_price() {
		return item_income_price;
	}

	public void setItem_income_price(int item_income_price) {
		this.item_income_price = item_income_price;
	}

	public int getIncome_inqty() {
		return income_inqty;
	}

	public void setIncome_inqty(int income_inqty) {
		this.income_inqty = income_inqty;
	}

	public int getIncome_total_price() {
		return income_total_price;
	}

	public void setIncome_total_price(int income_total_price) {
		this.income_total_price = income_total_price;
	}

	public String getBig_image() {
		return big_image;
	}

	public void setBig_image(String big_image) {
		this.big_image = big_image;
	}

	public int getItem_code() {
		return item_code;
	}

	public void setItem_code(int item_code) {
		this.item_code = item_code;
	}

	public String getMade_company() {
		return made_company;
	}

	public void setMade_company(String made_company) {
		this.made_company = made_company;
	}

	public String getPermit() {
		return permit;
	}

	public void setPermit(String permit) {
		this.permit = permit;
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

	public int getVendor_code() {
		return vendor_code;
	}

	public void setVendor_code(int vendor_code) {
		this.vendor_code = vendor_code;
	}

	public String getVendor_manager() {
		return vendor_manager;
	}

	public void setVendor_manager(String vendor_manager) {
		this.vendor_manager = vendor_manager;
	}

	public String getVendor_representive_number() {
		return vendor_representive_number;
	}

	public void setVendor_representive_number(String vendor_representive_number) {
		this.vendor_representive_number = vendor_representive_number;
	}

	@Override
	public String toString() {
		return "ReceiveDetailDTO [income_date=" + income_date + ", item_name=" + item_name + ", vendor_name="
				+ vendor_name + ", item_division=" + item_division + ", item_income_price=" + item_income_price
				+ ", income_inqty=" + income_inqty + ", income_total_price=" + income_total_price + ", big_image="
				+ big_image + ", item_code=" + item_code + ", made_company=" + made_company + ", permit=" + permit
				+ ", main_ingrd=" + main_ingrd + ", item_category=" + item_category + ", vendor_code=" + vendor_code
				+ ", vendor_manager=" + vendor_manager + ", vendor_representive_number=" + vendor_representive_number
				+ "]";
	}
}
