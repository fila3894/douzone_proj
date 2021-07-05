package com.example.service;
import java.util.List;
import com.example.dto.SaleDetailDTO;

public interface SaleDetailService {
	public void insertSaleData(List<SaleDetailDTO> saleData) throws Exception;
	public List<SaleDetailDTO> searchDate(String startDate, String endDate) throws Exception;
	public void updateData(int item_code, int item_quantity, int item_sale_price) throws Exception;
	public void deleteAll(int item_code) throws Exception;
	public void deleteData(int item_code) throws Exception;
	public int readIdx() throws Exception;
}
