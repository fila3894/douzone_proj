package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dto.SaleDetailDTO;
import com.example.mapper.SaleDetailMapper;

@Service
public class SaleDetailServiceImpl implements SaleDetailService{
	
	@Autowired
	private SaleDetailMapper saleDetailMapper;

	@Override
	public void insertSaleData(List<SaleDetailDTO> saleData) throws Exception {
		saleDetailMapper.insertSaleData(saleData);
	}

	@Override
	public List<SaleDetailDTO> searchDate(String startDate, String endDate) throws Exception {
		return saleDetailMapper.searchDate(startDate, endDate);
	}

	@Override
	public void updateData(int item_code, int item_quantity, int item_sale_price) throws Exception {
		saleDetailMapper.updateData(item_code, item_quantity, item_sale_price);
	}

	@Override
	public void deleteAll(int item_code) throws Exception {
		saleDetailMapper.deleteAll(item_code);
	}

	@Override
	public void deleteData(int item_code) throws Exception {
		saleDetailMapper.deleteData(item_code);
	}

	@Override
	public int readIdx() throws Exception {
		return saleDetailMapper.readIdx();
	}
}
