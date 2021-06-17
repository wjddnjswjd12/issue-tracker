package com.codesquad.issuetracker.dto.milestone;

import java.time.LocalDate;

public class MilestoneRequest {

    private String title;

    private String description;

    private LocalDate dueDate;

    public MilestoneRequest(String title, String description, LocalDate dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }
}
