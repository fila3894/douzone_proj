package com.example.mapper;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.dto.ReceiveDetailDTO;

@Mapper
public interface ReceiveDetailMapper {
	public List<ReceiveDetailDTO> search(String startDate, String endDate) throws Exception;
	public List<ReceiveDetailDTO> searchVendor(String startDate, String endDate, String vendor_name) throws Exception;
	public List<ReceiveDetailDTO> searchItem(String startDate, String endDate, String item_name) throws Exception;
	public List<ReceiveDetailDTO> searchAll(String startDate, String endDate, String vendor_name, String item_name) throws Exception;
	public void updateData(int item_code, int income_inqty, int item_income_price) throws Exception;
	public void deleteAll(int item_code) throws Exception;
	public void deleteData(int item_code) throws Exception;
}
