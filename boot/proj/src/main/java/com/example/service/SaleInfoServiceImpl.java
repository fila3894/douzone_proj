package com.example.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dto.SaleDTO;
import com.example.mapper.SaleInfoMapper;

@Service
public class SaleInfoServiceImpl implements SaleInfoService {
	
	@Autowired
	private SaleInfoMapper saleInfoMapper;
	
	@Override
	public List<SaleDTO> selectSale(int minIndex) throws Exception {
		return saleInfoMapper.selectSale(minIndex);
	}

	@Override
	public List<SaleDTO> searchSale(HashMap<Object, Object> map) throws Exception {
		return saleInfoMapper.searchSale(map);
	}

	@Override
	public int searchCnt(String searchText) throws Exception {
		return saleInfoMapper.searchCnt(searchText);
	}
}
