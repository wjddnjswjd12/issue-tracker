package com.codesquad.issuetracker.dto.issue.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class IssueRequest {

    private String title;

    private String comment;

    @JsonProperty(value = "label_ids")
    private List<Long> labelIds;

    @JsonProperty(value = "milestone_id")
    private Long milestoneId;

    @JsonProperty(value = "assignee_ids")
    private List<Long> assigneeIds;

    public IssueRequest(String title, String comment, List<Long> labelIds, Long milestoneId, List<Long> assigneeIds) {
        this.title = title;
        this.comment = comment;
        this.labelIds = labelIds;
        this.milestoneId = milestoneId;
        this.assigneeIds = assigneeIds;
    }

    public String getTitle() {
        return title;
    }

    public String getComment() {
        return comment;
    }

    public List<Long> getLabelIds() {
        return labelIds;
    }

    public Long getMilestoneId() {
        return milestoneId;
    }

    public List<Long> getAssigneeIds() {
        return assigneeIds;
    }
}
