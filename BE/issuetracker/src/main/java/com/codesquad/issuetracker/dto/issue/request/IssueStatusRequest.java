package com.codesquad.issuetracker.dto.issue.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class IssueStatusRequest {

    @JsonProperty(value = "issue_ids")
    private List<Long> issueIds;

    @JsonProperty(value = "is_open")
    private boolean isOpen;

    public IssueStatusRequest(List<Long> issueIds, boolean isOpen) {
        this.issueIds = issueIds;
        this.isOpen = isOpen;
    }

    public List<Long> getIssueIds() {
        return issueIds;
    }

    public boolean isOpen() {
        return isOpen;
    }
}
