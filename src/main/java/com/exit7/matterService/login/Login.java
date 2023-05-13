package com.exit7.matterService.login;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

@Controller
@ResponseBody
public class Login {
    @PostMapping("/api/users/login")
    public boolean check_user(HttpServletRequest res) {
        System.out.println(res);
        return true;
    }
}
