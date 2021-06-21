package com.codesquad.issuetracker.dto.issue;

import com.codesquad.issuetracker.domain.Issue;
import com.codesquad.issuetracker.dto.UserDTO;
import com.codesquad.issuetracker.dto.label.LabelDTO;
import com.codesquad.issuetracker.dto.milestone.MilestoneDTO;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

public class IssueResponse {
    private Long id;

    private String title;

    private int number;

    private UserDTO author;

    private LocalDateTime createdTime;

    private MilestoneDTO milestone;

    private boolean isOpen;

    private List<LabelDTO> labels;

    public static IssueResponse of(Issue issue) {
        List<LabelDTO> labelDTOS = issue.getLabels().stream()
                .map(LabelDTO::briefOf)
                .collect(Collectors.toList());

        return new IssueResponse(issue.getId(),
                issue.getTitle(),
                issue.getNumber(),
                UserDTO.of(issue.getAuthor()),
                issue.getCreatedTime(),
                issue.getMileStone() == null ? null : MilestoneDTO.briefOf(issue.getMileStone()),
                issue.isOpen(),
                labelDTOS);
    }

    private IssueResponse(Long id, String title, int number, UserDTO author, LocalDateTime createdTime, MilestoneDTO milestone, boolean isOpen, List<LabelDTO> labels) {
        this.id = id;
        this.title = title;
        this.number = number;
        this.author = author;
        this.createdTime = createdTime;
        this.milestone = milestone;
        this.isOpen = isOpen;
        this.labels = labels;
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

    public UserDTO getAuthor() {
        return author;
    }

    public LocalDateTime getCreatedTime() {
        return createdTime;
    }

    public MilestoneDTO getMilestone() {
        return milestone;
    }

    public boolean isOpen() {
        return isOpen;
    }

    public List<LabelDTO> getLabels() {
        if (labels.size() == 0) {
            return null;
        }
        return labels;
    }
}
