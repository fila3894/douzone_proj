package com.example.service;

import java.util.List;
import com.example.dto.RevenueGraphDTO;

public interface RevenueGraphService {
	public List<RevenueGraphDTO> dayTotal() throws Exception;
	public List<RevenueGraphDTO> monthTotal() throws Exception;
	public int filterData(int filterCode) throws Exception;
}
