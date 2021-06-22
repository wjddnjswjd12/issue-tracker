package com.codesquad.issuetracker.domain;

import com.codesquad.issuetracker.dto.milestone.MilestoneRequest;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Milestone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private LocalDate dueDate;

    private String description;

    private LocalDateTime createdTime;

    @OneToMany(mappedBy = "mileStone")
    private List<Issue> issues = new ArrayList<>();

    public Milestone() {}

    public Milestone(String title, String description, LocalDate dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.createdTime = LocalDateTime.now();
    }

    public void addIssue(Issue issue) {
        issues.add(issue);
    }

    public int getTotalIssueCount() {
        return this.issues.size();
    }

    public int getOpenedIssueCount() {
        return (int) this.issues.stream()
                .filter(Issue::isOpen)
                .filter(issue -> !issue.isDeleted())
                .count();
    }

    public Milestone modify(MilestoneRequest milestoneRequest) {
        this.title = milestoneRequest.getTitle();
        this.description = milestoneRequest.getDescription();
        this.dueDate = milestoneRequest.getDueDate();
        return this;
    }

    public int getClosedIssueCount() {
        return this.getTotalIssueCount() - this.getOpenedIssueCount();
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public String getDescription() {
        return description;
    }

    public LocalDateTime getCreatedTime() {
        return createdTime;
    }

    public List<Issue> getIssues() {
        return issues;
    }
}
