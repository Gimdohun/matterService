package com.exit7.matterService.hello;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class Hello {

    @GetMapping("/api/hello/")
    public String test() {
        return "Hello, world!";
    }
}