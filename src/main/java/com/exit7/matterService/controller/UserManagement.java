package com.exit7.matterService.controller;

import com.exit7.matterService.dto.UserDTO;
import com.exit7.matterService.repository.UserRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import com.exit7.matterService.service.*;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

@Controller
@ResponseBody
public class UserManagement {

    @PostMapping("/api/users/login")
    public UserDTO login(HttpServletRequest res) {
        return Login.check_user(res.getParameter("email"),res.getParameter("password"));
    }
    @PostMapping("/main")
    public void main() {
    }

}

