package com.codesquad.issuetracker.dto;

import com.codesquad.issuetracker.domain.Comment;
import com.codesquad.issuetracker.domain.User;

import java.time.LocalDateTime;

public class CommentDTO {

    private Long id;

    private UserDTO author;

    private boolean isMine;

    private LocalDateTime createdTime;

    private String content;

    public static CommentDTO of(Comment comment, User user) {
        return new CommentDTO(comment.getId(), UserDTO.of(comment.getAuthor()),
                comment.getAuthor() == user, comment.getCreatedTime(), comment.getContent());
    }

    private CommentDTO(Long id, UserDTO author, boolean isMine, LocalDateTime createdTime, String content) {
        this.id = id;
        this.author = author;
        this.isMine = isMine;
        this.createdTime = createdTime;
        this.content = content;
    }

    public Long getId() {
        return id;
    }

    public UserDTO getAuthor() {
        return author;
    }

    public boolean isMine() {
        return isMine;
    }

    public LocalDateTime getCreatedTime() {
        return createdTime;
    }

    public String getContent() {
        return content;
    }
}
