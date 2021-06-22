package com.codesquad.issuetracker.domain;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Issue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private int number;

    private LocalDateTime createdTime;

    private boolean open;

    private boolean deleted;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private User author;

    @ManyToOne
    @JoinColumn(name = "milestone_id")
    private Milestone mileStone;

    @OneToMany(mappedBy = "issue", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();

    @ManyToMany
    @JoinTable(name = "assign")
    private List<User> assignee = new ArrayList<>();

    @ManyToMany
    @JoinTable(name = "issue_label")
    private List<Label> labels = new ArrayList<>();

    public Issue() {}

    public Issue(String title, User author, Milestone mileStone,
                 List<User> assignee, List<Label> labels) {
        this.title = title;
        this.createdTime = LocalDateTime.now();
        this.open = true;
        this.deleted = false;
        this.author = author;
        this.mileStone = mileStone;
        this.assignee = assignee;
        this.labels = labels;
    }

    public Issue(String title, User author, List<Label> labels, Milestone mileStone, Comment comment) {
        this.title = title;
        this.author = author;
        this.mileStone = mileStone;
        this.createdTime = LocalDateTime.now();
        this.open = true;
        this.deleted = false;
        this.comments.add(comment);
    }

    public Issue delete() {
        this.deleted = true;
        return this;
    }

    public Issue addComment(Comment comment) {
        this.comments.add(comment);
        comment.setIssue(this);
        return this;
    }

    public Issue modifyTitle(String title) {
        this.title = title;
        return this;
    }

    public Issue modifyMilestone(Milestone milestone) {
        this.mileStone = milestone;
        return this;
    }

    public Issue modifyAssignee(List<User> assignee) {
        this.assignee = assignee;
        return this;
    }

    public Issue modifyLabel(List<Label> labels) {
        this.labels = labels;
        return this;
    }

    public Issue modifyStatus(boolean status) {
        this.open = status;
        return this;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public int getNumber() {
        return number;
    }

    public LocalDateTime getCreatedTime() {
        return createdTime;
    }

    public boolean isOpen() {
        return open;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public User getAuthor() {
        return author;
    }

    public Milestone getMileStone() {
        return mileStone;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public List<User> getAssignee() {
        return assignee;
    }

    public List<Label> getLabels() {
        return labels;
    }
}
