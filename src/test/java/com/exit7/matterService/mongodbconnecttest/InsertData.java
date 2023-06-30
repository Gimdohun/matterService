package com.exit7.matterService.mongodbconnecttest;

import com.exit7.matterService.dto.UserDTO;
import com.exit7.matterService.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;

import java.util.List;

@DataMongoTest
public class InsertData {
    @Autowired
    public UserRepository userRepository;

    @Test
    public void usersave() {
        UserDTO user = new UserDTO("김도훈", "test@naver.com", "testtest12","G", "Hi I'm test!");
        userRepository.insert(user);
        UserDTO user2 = new UserDTO("김도훈2", "test@naver.com", "testtest12","G", "Hi I'm test!");
        userRepository.insert(user2);
        UserDTO user3 = new UserDTO("김도훈3", "test@naver.com", "testtest12","G", "Hi I'm test!");
        userRepository.insert(user3);
        List<UserDTO> usersdata = userRepository.findAll();
        for(UserDTO userInfo : usersdata){
            System.out.println("data = " + userInfo.getName());
        }
    }
}

