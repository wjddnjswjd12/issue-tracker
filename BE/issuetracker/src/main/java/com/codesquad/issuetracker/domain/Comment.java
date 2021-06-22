package com.codesquad.issuetracker.domain;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;

    private LocalDateTime createdTime;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private User author;

    @ManyToOne
    @JoinColumn(name = "issue_id")
    private Issue issue;

    public Comment() {
    }

    public Comment(String content, User author) {
        this.content = content;
        this.author = author;
        this.createdTime = LocalDateTime.now();
    }

    public Comment(String content, User author, Issue issue) {
        this.content = content;
        this.createdTime = LocalDateTime.now();
        this.author = author;
        this.issue = issue;
    }

    public void setIssue(Issue issue) {
        this.issue = issue;
    }

    public Long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

    public LocalDateTime getCreatedTime() {
        return createdTime;
    }

    public User getAuthor() {
        return author;
    }

    public Issue getIssue() {
        return issue;
    }
}
