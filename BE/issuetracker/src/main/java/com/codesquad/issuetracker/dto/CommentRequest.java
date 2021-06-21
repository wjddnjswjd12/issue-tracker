package com.codesquad.issuetracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CommentRequest {

    @JsonProperty("issue_id")
    private Long issueId;

    private String comment;

    public Long getIssueId() {
        return issueId;
    }

    public String getComment() {
        return comment;
    }
}
