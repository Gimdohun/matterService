package com.exit7.matterService.repository;

import com.exit7.matterService.user.User;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;

@Repository
@ResponseBody
@Mongo
public class MongoDBRepository {
    @PostMapping("/api/users/signup")
    public boolean setData(HttpServletRequest res) {
        Enumeration data = res.getParameterNames();
        String name = (String)data.nextElement();
        String email = (String)data.nextElement();
        String password = (String)data.nextElement();
        String introduce = (String)data.nextElement();
        User user = new User(name, email, password, introduce);

        if(user.getEmail() == null)
        {
            return false;
        }
        return true;
    }
}
