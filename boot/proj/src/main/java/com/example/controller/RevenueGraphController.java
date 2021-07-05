package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.RevenueGraphDTO;
import com.example.service.RevenueGraphService;

@RestController
@RequestMapping("/graph")
public class RevenueGraphController {
	
	@Autowired
	private RevenueGraphService revenueGraphService;
	
	@GetMapping("/day")
	public List<RevenueGraphDTO> dayTotal() throws Exception {
		List<RevenueGraphDTO> dayTotal = revenueGraphService.dayTotal();
		System.out.println(dayTotal);
		return dayTotal;
	}
	
	@GetMapping("/month")
	public List<RevenueGraphDTO> monthTotal() throws Exception {
		List<RevenueGraphDTO> monthTotal = revenueGraphService.monthTotal();
		System.out.println(monthTotal);
		return monthTotal;
	}
	
	// filter
	@GetMapping("/filter")
	public int filter(@RequestParam(required=false) int filterCode) throws Exception {
		System.out.println(filterCode);
		int filterData = revenueGraphService.filterData(filterCode);
		System.out.println(filterData);
		return filterData;
	}	
}
