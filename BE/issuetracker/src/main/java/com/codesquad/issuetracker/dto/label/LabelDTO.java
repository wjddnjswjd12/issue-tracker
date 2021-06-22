package com.codesquad.issuetracker.dto.label;

import com.codesquad.issuetracker.domain.Label;

public class LabelDTO {

    private Long id;

    private String title;

    private String description;

    private String color;

    public static LabelDTO briefOf(Label label) {
        return new LabelDTO(label.getId(), label.getTitle(), null, label.getColor());
    }

    public static LabelDTO of(Label label) {
        return new LabelDTO(label.getId(), label.getTitle(), label.getDescription(), label.getColor());
    }

    private LabelDTO(Long id, String title, String description, String color) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.color = color;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getColor() {
        return color;
    }
}
