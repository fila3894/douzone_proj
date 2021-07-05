package com.example.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.SaleDTO;
import com.example.service.SaleInfoService;

@RestController
@RequestMapping("/sale")
public class SaleController {
	
	@Autowired
	private SaleInfoService saleInfoService;
		
//	// 페이징 read
//	@GetMapping("/read/page")
//	public List<SaleDTO> read(@RequestParam int minIndex) throws Exception {
//		System.out.println(minIndex);
//		List<SaleDTO> saleList = saleInfoService.selectSale(minIndex);
//		return saleList;
//	}
	
	// 검색(Search)
	@GetMapping("/read/page")
	public List<SaleDTO> search(@RequestParam(value="searchText", required = false) String searchText, @RequestParam(value="minIndex") int minIndex) throws Exception {
		if(searchText == null) { // 전체 정보
			System.out.println(minIndex);
			List<SaleDTO> saleList = saleInfoService.selectSale(minIndex);
			return saleList;
		} else { // 검색 결과 반환
			HashMap<Object, Object> map = new HashMap<Object, Object>();
			map.put("searchText", searchText);
			map.put("minIndex", minIndex);
			List<SaleDTO> slist = saleInfoService.searchSale(map);
			System.out.println(searchText + minIndex + "번째 검색");
			System.out.println(slist);
			return slist;
		}		
	}
	
	@GetMapping("/read/count")
	public int searchCnt(@RequestParam(value="searchText", required = false) String searchText) throws Exception {
		System.out.println(searchText);
		int total = saleInfoService.searchCnt(searchText);
		return total;
	}
}
