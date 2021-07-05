package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dto.ReceiveDetailDTO;
import com.example.mapper.ReceiveDetailMapper;

@Service
public class ReceiveDetailServiceImpl implements ReceiveDetailService {

	@Autowired
	private ReceiveDetailMapper receiveDetailMapper;
	
	@Override
	public List<ReceiveDetailDTO> searchDate(String startDate, String endDate) throws Exception {
		return receiveDetailMapper.search(startDate, endDate);
	}

	@Override
	public List<ReceiveDetailDTO> searchVendor(String startDate, String endDate, String vendor_name) throws Exception {
		return receiveDetailMapper.searchVendor(startDate, endDate, vendor_name);
	}

	@Override
	public List<ReceiveDetailDTO> searchItem(String startDate, String endDate, String item_name) throws Exception {
		return receiveDetailMapper.searchItem(startDate, endDate, item_name);
	}

	@Override
	public List<ReceiveDetailDTO> searchAll(String startDate, String endDate, String vendor_name, String item_name) throws Exception {
		return receiveDetailMapper.searchAll(startDate, endDate, item_name, vendor_name);
	}

	// update
	@Override
	public void updateData(int item_code, int income_inqty, int item_income_price) throws Exception {
		receiveDetailMapper.updateData(item_code, income_inqty, item_income_price);
	}

	//delete
	@Override
	public void deleteAll(int item_code) throws Exception {
		receiveDetailMapper.deleteAll(item_code);
	}
	@Override
	public void deleteData(int item_code) throws Exception {
		receiveDetailMapper.deleteData(item_code);
	}

}
