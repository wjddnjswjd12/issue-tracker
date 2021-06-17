package com.codesquad.issuetracker.dto;

import com.codesquad.issuetracker.domain.User;

public class UserDTO {

    private Long id;

    private String name;

    private String imageUrl;

    public static UserDTO of(User author) {
        return new UserDTO(author.getId(), author.getName(), author.getImageUrl());
    }

    private UserDTO(Long id, String name, String imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getImageUrl() {
        return imageUrl;
    }
}
