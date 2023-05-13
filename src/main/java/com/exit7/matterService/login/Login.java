package com.exit7.matterService.login;

import com.exit7.matterService.user.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

@Controller
@ResponseBody
public class Login {
    private User user;
    @PostMapping("/api/users/login")
    public int check_user(HttpServletRequest res) {
        System.out.println(res);
        if
        return user.getId();
    }
}
