package com.codesquad.issuetracker.dto.milestone;

import com.codesquad.issuetracker.domain.Milestone;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class MilestoneDTO {

    private Long id;

    private String title;

    private String description;

    private LocalDateTime createdTime;

    private LocalDate dueDate;

    private int closedIssueCount;

    private int openedIssueCount;

    // 이슈목록에 보여질 내용
    public static MilestoneDTO briefOf(Milestone milestone) {
        return new MilestoneDTO(milestone.getId(), milestone.getTitle(),
                null, null, null, null, null);
    }

    // 이슈 상세보기에 보여질 내용
    public static MilestoneDTO of(Milestone milestone) {
        return new MilestoneDTO(milestone.getId(), milestone.getTitle(),
                null, null, null, milestone.getClosedIssueCount(), milestone.getOpenedIssueCount());
    }

    // 마일스톤 목록에 보여질 내용
    public static MilestoneDTO detailedOf(Milestone milestone) {
        return new MilestoneDTO(milestone.getId(), milestone.getTitle(), milestone.getDescription(),
                milestone.getCreatedTime(), milestone.getDueDate(), milestone.getClosedIssueCount(), milestone.getOpenedIssueCount());
    }

    private MilestoneDTO(Long id, String title, String description, LocalDateTime createdTime, LocalDate dueDate, Integer closedIssueCount, Integer openedIssueCount) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createdTime = createdTime;
        this.dueDate = dueDate;
        this.closedIssueCount = closedIssueCount;
        this.openedIssueCount = openedIssueCount;
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

    public LocalDateTime getCreatedTime() {
        return createdTime;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public int getClosedIssueCount() {
        return closedIssueCount;
    }

    public int getOpenedIssueCount() {
        return openedIssueCount;
    }
}
