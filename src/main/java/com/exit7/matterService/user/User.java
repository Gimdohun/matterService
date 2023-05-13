package com.exit7.matterService.user;

public class User {
    private int id;
    private String name;
    private String email;
    private String password;
    private String photo;
    private String introduce;

    public User() {

    }

    public User(String name, String email, String password, String introduce) {

    }

    public String getEmail() {
        return email;
    }

    public String getPassword(){
        return password;
    }
    public int getId() {
        return id;
    }

}
