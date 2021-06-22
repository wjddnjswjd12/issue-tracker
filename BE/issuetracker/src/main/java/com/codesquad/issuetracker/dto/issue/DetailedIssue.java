package com.codesquad.issuetracker.dto.issue;

import com.codesquad.issuetracker.domain.Comment;
import com.codesquad.issuetracker.domain.Issue;
import com.codesquad.issuetracker.domain.User;
import com.codesquad.issuetracker.dto.CommentDTO;
import com.codesquad.issuetracker.dto.UserDTO;
import com.codesquad.issuetracker.dto.label.LabelDTO;
import com.codesquad.issuetracker.dto.milestone.MilestoneDTO;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class DetailedIssue {

    private Long id;

    private String title;

    private int number;

    private boolean open;

    private LocalDateTime createdTime;

    private UserDTO author;

    private List<LabelDTO> labels;

    private List<UserDTO> assignee;

    private MilestoneDTO milestone;

    private List<CommentDTO> comments;

    public static DetailedIssue of(Issue issue, User user) {
        List<LabelDTO> labelDTOS = issue.getLabels().stream()
                .map(LabelDTO::briefOf)
                .collect(Collectors.toList());

        List<UserDTO> assigneeDTOS = issue.getAssignee().stream()
                .map(UserDTO::of)
                .collect(Collectors.toList());

        List<CommentDTO> commentDTOS = getCommentDTOs(issue, user);

        return new DetailedIssue(issue.getId(),
                issue.getTitle(),
                issue.getNumber(),
                issue.isOpen(),
                issue.getCreatedTime(),
                UserDTO.of(issue.getAuthor()),
                labelDTOS,
                assigneeDTOS,
                issue.getMileStone() == null ? null : MilestoneDTO.of(issue.getMileStone()),
                commentDTOS);
    }

    // commentDTO를 만들기 위해 로그인 된 유저를 파라미터로 던져줘야 하기 떄문에 stream을 사용하지 못하고 for loop을 이용합니다.
    private static List<CommentDTO> getCommentDTOs(Issue issue, User user) {
        List<CommentDTO> commentDTOS = new ArrayList<>();
        for (Comment comment : issue.getComments()) {
            commentDTOS.add(CommentDTO.of(comment, user));
        }

        return commentDTOS;
    }

    private DetailedIssue(Long id, String title, int number, boolean isOpen, LocalDateTime createdTime, UserDTO author,
                         List<LabelDTO> labels, List<UserDTO> assignee, MilestoneDTO milestone, List<CommentDTO> comments) {
        this.id = id;
        this.title = title;
        this.number = number;
        this.open = isOpen;
        this.createdTime = createdTime;
        this.author = author;
        this.labels = labels;
        this.assignee = assignee;
        this.milestone = milestone;
        this.comments = comments;
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

    public boolean isOpen() {
        return open;
    }

    public LocalDateTime getCreatedTime() {
        return createdTime;
    }

    public UserDTO getAuthor() {
        return author;
    }

    public List<LabelDTO> getLabels() {
        if (this.labels.size() == 0) {
            return null;
        }

        return labels;
    }

    public List<UserDTO> getAssignee() {
        if (this.assignee.size() == 0) {
            return null;
        }

        return assignee;
    }

    public MilestoneDTO getMilestone() {
        return milestone;
    }

    public List<CommentDTO> getComments() {
        if (this.comments.size() == 0) {
            return null;
        }

        return comments;
    }
}
