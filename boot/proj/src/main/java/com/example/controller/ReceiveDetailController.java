package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.ReceiveDetailDTO;
import com.example.service.ReceiveDetailService;

@RestController
@RequestMapping("/receive")
public class ReceiveDetailController {
	
	@Autowired
	private ReceiveDetailService receiveDetailService;
	
	// searchForm
	@GetMapping("/detail/search")
	public List<ReceiveDetailDTO> search(@RequestParam String startDate, 
										@RequestParam String endDate,
										@RequestParam String item_name,
										@RequestParam String vendor_name) throws Exception {
		if(vendor_name == "" && item_name != "") {
			List<ReceiveDetailDTO> searchList = receiveDetailService.searchItem(startDate, endDate, item_name);
			System.out.println("거래처이름 없는 경우");
			return searchList;
		} else if(item_name == "" && vendor_name != "") {
			List<ReceiveDetailDTO> searchList = receiveDetailService.searchVendor(startDate, endDate, vendor_name);
			System.out.println("아이템이름 없는 경우");
			return searchList;
		} else if(item_name == "" && vendor_name == ""){
			List<ReceiveDetailDTO> searchList = receiveDetailService.searchDate(startDate, endDate);
			System.out.println("둘다 없는 경우");
			return searchList;
		} else {
			List<ReceiveDetailDTO> searchList = receiveDetailService.searchAll(startDate, endDate, vendor_name, item_name);
			System.out.println(item_name + vendor_name);
			System.out.println(startDate + "~");
			System.out.println(searchList);
			return searchList;
		}
	}
	
	// update
	@PostMapping("/detail/update")
	public void update(@RequestBody ReceiveDetailDTO modData) throws Exception {
		int item_code = modData.getItem_code();
		int income_inqty = modData.getIncome_inqty();
		int item_income_price = modData.getItem_income_price();
		receiveDetailService.updateData(item_code, income_inqty, item_income_price);
		System.out.println(item_code + "번 약품수정완료");
	}
	
	// delete
	@GetMapping("/detail/delete")
	public void delete(@RequestParam int item_code) throws Exception {
		// delete All
		if(item_code == 7) {
			receiveDetailService.deleteAll(item_code);
			System.out.println("전체 약품 삭제");
		} else { // delete
			receiveDetailService.deleteData(item_code);
			System.out.println(item_code + " 번 약품 삭제");
		}
	}
}
