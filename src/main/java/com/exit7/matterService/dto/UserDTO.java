package com.exit7.matterService.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@NoArgsConstructor
@Document(collection = "users")
public class UserDTO {
    @Id
    private String id;
    private String email;
    private String introduce;
    private String name;
    private String password;
    private String photo;

    public UserDTO(String name, String email, String password, String photo, String introduce) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.photo = photo;
        this.introduce = introduce;
    }
}
