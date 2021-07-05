package com.example.service;

import com.example.dto.SaleDTO;

import java.util.HashMap;
import java.util.List;


public interface SaleInfoService {
	List<SaleDTO> selectSale(int minIndex) throws Exception;
	List<SaleDTO> searchSale(HashMap<Object, Object> map) throws Exception;
	int searchCnt(String searchText) throws Exception;
}
