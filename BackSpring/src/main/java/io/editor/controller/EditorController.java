package io.editor.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import lombok.Data;

@RestController
public class EditorController {
	
	@GetMapping("/hello")
	public Member hello(){
		return new Member(1L,"Hong");
	}

}

@AllArgsConstructor
@Data
class Member {
	private Long id;
	private String name;
}
