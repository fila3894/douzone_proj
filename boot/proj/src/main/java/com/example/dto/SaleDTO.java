package com.example.dto;

public class SaleDTO {
	private int item_code;
	private String item_name;
	private String appearance;
	private String big_image;
	private String create_data;
	private String classification_name;
	private int classification_code;
	private int minIndex;
	
	

	public int getMinIndex() {
		return minIndex;
	}

	public void setMinIndex(int minIndex) {
		this.minIndex = minIndex;
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

	public String getAppearance() {
		return appearance;
	}

	public void setAppearance(String appearance) {
		this.appearance = appearance;
	}

	public String getBig_image() {
		return big_image;
	}

	public void setBig_image(String big_image) {
		this.big_image = big_image;
	}

	public String getCreate_data() {
		return create_data;
	}

	public void setCreate_data(String create_data) {
		this.create_data = create_data;
	}

	public String getClassification_name() {
		return classification_name;
	}

	public void setClassification_name(String classification_name) {
		this.classification_name = classification_name;
	}

	public int getClassification_code() {
		return classification_code;
	}

	public void setClassification_code(int classification_code) {
		this.classification_code = classification_code;
	}

	@Override
	public String toString() {
		return "SaleDTO [item_code=" + item_code + ", item_name=" + item_name + ", appearance=" + appearance
				+ ", big_image=" + big_image + ", create_data=" + create_data + ", classification_name="
				+ classification_name + ", classification_code=" + classification_code + ", minIndex=" + minIndex + "]";
	}



}
