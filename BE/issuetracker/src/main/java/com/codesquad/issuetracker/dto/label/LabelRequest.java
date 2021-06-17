package com.codesquad.issuetracker.dto.label;

public class LabelRequest {

    private String title;

    private String description;

    private String color;

    private String fontColor;

    public LabelRequest(String title, String description, String color, String fontColor) {
        this.title = title;
        this.description = description;
        this.color = color;
        this.fontColor = fontColor;
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

    public String getFontColor() {
        return fontColor;
    }
}
