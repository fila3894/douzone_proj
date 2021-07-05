package com.example.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.example.dto.RevenueGraphDTO;

@Mapper
public interface RevenueGraphMapper {
	public List<RevenueGraphDTO> dayTotal() throws Exception;
	public List<RevenueGraphDTO> monthTotal() throws Exception;
	public int filterData(int filterCode) throws Exception;
}
