package com.codesquad.issuetracker.domain;

import com.codesquad.issuetracker.dto.label.LabelRequest;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class Label {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String color;

    private String description;

    private LocalDateTime createdTime;

    public Label() {
    }

    public Label(String title, String color, String description) {
        this.title = title;
        this.color = color;
        this.description = description;
        this.createdTime = LocalDateTime.now();
    }

    public Label modify(LabelRequest labelRequest) {
        this.title = labelRequest.getTitle();
        this.description = labelRequest.getDescription();
        this.color = labelRequest.getColor();
        return this;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getColor() {
        return color;
    }

    public String getDescription() {
        return description;
    }

    public LocalDateTime getCreatedTime() {
        return createdTime;
    }
}
