package com.exit7.matterService.service;

import com.exit7.matterService.dto.UserDTO;
import com.exit7.matterService.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Service
@ResponseBody
public class Login {
    private UserDTO user;

    public final UserRepository userRepository;
    private static List<UserDTO> users;

    public Login(UserRepository userRepository) {
        this.userRepository = userRepository;
        users = userRepository.findAll();
    }

    public static UserDTO check_user(String email, String password){
        for(UserDTO user : users){
            System.out.println(user.getEmail());
            if(user.getEmail().equals(email)){
                if(user.getPassword().equals(password)){
                    return user;
                }
                else{
                    return null;
                }
            }
        }
        return null;
    }
    public boolean add_user(String name, String email, String password, String photo, String introduce){
        for(UserDTO user : users){
            if(user.getEmail().equals(email)){
                return false;
            }
        }
        UserDTO userInfo = new UserDTO(name, email, password,photo,introduce);
        userRepository.insert(userInfo);
        return true;
    }
}
