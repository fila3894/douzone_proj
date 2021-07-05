package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.SaleDetailDTO;
import com.example.service.SaleDetailService;

@RestController
@RequestMapping("/sale/detail")
public class SaleDetailController {
	
	@Autowired
	private SaleDetailService saleDetailService;
	
	@PostMapping("/post")
	public void post(@RequestBody List<SaleDetailDTO> saleData) throws Exception {
		saleDetailService.insertSaleData(saleData);
	}
	
	@GetMapping("/calender")
	public List<SaleDetailDTO> getDates(@RequestParam String startDate, @RequestParam String endDate) throws Exception {
		System.out.println(startDate + " ~ " + endDate);
		List<SaleDetailDTO> datelist = saleDetailService.searchDate(startDate, endDate);
		System.out.println(datelist);
		return datelist;
	}
	
	// update
	@PostMapping("/update")
	public void update(@RequestBody SaleDetailDTO modData) throws Exception {
		int item_code = modData.getItem_code();
		int item_quantity = modData.getItem_quantity(); 
		int item_sale_price = modData.getItem_sale_price();
		saleDetailService.updateData(item_code, item_quantity, item_sale_price);
		System.out.println(item_code + "번 약품수정완료");
	}
	
	// delete
	@GetMapping("/delete")
	public void delete(@RequestParam int item_code) throws Exception {
		// delete All
		if(item_code == 7) {
			saleDetailService.deleteAll(item_code);
			System.out.println("전체 약품 삭제");
		} else { // delete
			saleDetailService.deleteData(item_code);
			System.out.println(item_code + " 번 약품 삭제");
		}
	}
//	@PostMapping("/search")
//	public List<SaleDetailDTO> search(@RequestBody SaleDetailDTO searchData) {
//		System.out.println(searchData);
//		
//		return null;
//	}
	// 판매 페이지에서 마지막 인덱스 값 받아오는거
	@GetMapping("/lastIdx")
	public int lastIdx() throws Exception {
		int lastIdx = saleDetailService.readIdx();
		System.out.println(lastIdx);
		return lastIdx;
	}
}
