package com.example.dto;

public class RevenueGraphDTO {
	// 그래프 페이지
	private int total_price; // +판매상세 페이지
	private int income_total_price;
	private String month;
	private String day;
	private int revenue;

	public int getTotal_price() {
		return total_price;
	}

	public void setTotal_price(int total_price) {
		this.total_price = total_price;
	}

	public int getIncome_total_price() {
		return income_total_price;
	}

	public void setIncome_total_price(int income_total_price) {
		this.income_total_price = income_total_price;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public String getDay() {
		return day;
	}

	public void setDay(String day) {
		this.day = day;
	}

	public int getRevenue() {
		return revenue;
	}

	public void setRevenue(int revenue) {
		this.revenue = revenue;
	}

	@Override
	public String toString() {
		return "RevenueGraphDTO [total_price=" + total_price + ", income_total_price=" + income_total_price + ", month="
				+ month + ", day=" + day + ", revenue=" + revenue + "]";
	}
}
