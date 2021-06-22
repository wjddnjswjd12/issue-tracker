package com.codesquad.issuetracker.service;

import com.codesquad.issuetracker.domain.*;
import com.codesquad.issuetracker.dto.CommentRequest;
import com.codesquad.issuetracker.dto.issue.DetailedIssue;
import com.codesquad.issuetracker.dto.issue.IssueResponse;
import com.codesquad.issuetracker.dto.issue.request.IssueRequest;
import com.codesquad.issuetracker.dto.issue.request.IssueStatusRequest;
import com.codesquad.issuetracker.exception.NotFoundException;
import com.codesquad.issuetracker.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class IssueService {

    private IssueRepository issueRepository;
    private MilestoneService milestoneService;
    private LabelService labelService;
    private UserService userService;

    @Autowired
    public IssueService(IssueRepository issueRepository, MilestoneService milestoneService, LabelService labelService, UserService userService) {
        this.issueRepository = issueRepository;
        this.milestoneService = milestoneService;
        this.labelService = labelService;
        this.userService = userService;
    }

    public Issue findById(Long id) {
        return issueRepository.findById(id).orElseThrow(NotFoundException::new);
    }

    public List<IssueResponse> findAllIssues() {
        return issueRepository.findAllByOpenTrue().stream()
                .filter(issue -> !(issue.isDeleted()))
                .map(IssueResponse::of)
                .collect(Collectors.toList());
    }

    public DetailedIssue findDetailedIssueById(Long id, User user) {
        return DetailedIssue.of(findById(id), user);
    }

    public void create(IssueRequest issueRequest, User user) {
        //TODO: 테스트용 유저
        User user1 = userService.findById(1L);

        List<Label> labels = new ArrayList<>();
        if (issueRequest.getLabelIds() != null) {
            labels = labelService.findAllLabelByIds(issueRequest.getLabelIds());
        }

        List<User> assignees = new ArrayList<>();
        if (issueRequest.getAssigneeIds() != null) {
            userService.findAllUsersByIds(issueRequest.getAssigneeIds());
        }

        Milestone milestone = null;
        if (issueRequest.getMilestoneId() != null) {
            milestone = milestoneService.findById(issueRequest.getMilestoneId());
        }

        Issue issue = new Issue(issueRequest.getTitle(), user1, milestone, assignees, labels);

        issue.addComment(new Comment(issueRequest.getComment(), user1));
        issueRepository.save(issue);
    }

    public void addComment(CommentRequest commentRequest, User user) {
        Issue issue = findById(commentRequest.getIssueId());
        Comment comment = new Comment(commentRequest.getComment(), user);
        issueRepository.save(issue.addComment(comment));
    }

    public List<Issue> modifyStatus(IssueStatusRequest issueStatusRequest) {
        List<Issue> issues = issueRepository.findByIdIn(issueStatusRequest.getIssueIds());
        return issues.stream().map(issue -> issue.modifyStatus(issueStatusRequest.isOpen())).collect(Collectors.toList());
    }

    public Issue modifyTitle(Long id, String title) {
        return issueRepository.save(findById(id).modifyTitle(title));
    }

    public Issue modifyMilestone(Long id, Long milestoneId) {
        Milestone milestone = milestoneService.findById(milestoneId);
        return issueRepository.save(findById(id).modifyMilestone(milestone));
    }

    public Issue modifyAssignee(Long id, List<Long> assigneeIds) {
        List<User> newAssignees = userService.findAllUsersByIds(assigneeIds);
        return issueRepository.save(findById(id).modifyAssignee(newAssignees));
    }

    public void modifyLabel(Long id, List<Long> labelIds) {
        List<Label> newLabels = labelService.findAllLabelByIds(labelIds);
        issueRepository.save(findById(id).modifyLabel(newLabels));
    }

    public void delete(Long id) {
        issueRepository.save(findById(id).delete());
    }
}
