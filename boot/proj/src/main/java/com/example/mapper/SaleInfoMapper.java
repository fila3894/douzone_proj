package com.example.mapper;
import org.apache.ibatis.annotations.Mapper;

import com.example.dto.SaleDTO;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface SaleInfoMapper {
	List<SaleDTO> selectSale(int minIndex) throws Exception;
	List<SaleDTO> searchSale(HashMap<Object, Object> map) throws Exception;
	int searchCnt(String searchText) throws Exception;
}
