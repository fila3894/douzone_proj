package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dto.RevenueGraphDTO;
import com.example.mapper.RevenueGraphMapper;

@Service
public class RevenueGraphServiceImpl implements RevenueGraphService {
	
	@Autowired
	private RevenueGraphMapper revenueGraphMapper;
	
	@Override
	public List<RevenueGraphDTO> dayTotal() throws Exception {
		return revenueGraphMapper.dayTotal();
	}

	@Override
	public List<RevenueGraphDTO> monthTotal() throws Exception {
		return revenueGraphMapper.monthTotal();
	}

	@Override
	public int filterData(int filterCode) throws Exception {
		return revenueGraphMapper.filterData(filterCode);
	}
}
