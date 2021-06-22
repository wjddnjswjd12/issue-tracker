package com.codesquad.issuetracker.controller;

import com.codesquad.issuetracker.domain.User;
import com.codesquad.issuetracker.dto.ApiResult;
import com.codesquad.issuetracker.dto.CommentRequest;
import com.codesquad.issuetracker.dto.issue.DetailedIssue;
import com.codesquad.issuetracker.dto.issue.IssueResponse;
import com.codesquad.issuetracker.dto.issue.request.IssueRequest;
import com.codesquad.issuetracker.dto.issue.request.IssueStatusRequest;
import com.codesquad.issuetracker.service.IssueService;
import com.codesquad.issuetracker.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/issue")
public class IssueController {

    private IssueService issueService;
    private UserService userService;

    @Autowired
    public IssueController(IssueService issueService, UserService userService) {
        this.issueService = issueService;
        this.userService = userService;
    }

    @GetMapping
    public ApiResult<List<IssueResponse>> browseAllIssues() {
        return ApiResult.ok(issueService.findAllIssues());
    }

    @GetMapping("/{issueId}")
    public ApiResult<DetailedIssue> browseDetailedIssue(@PathVariable Long issueId, HttpServletRequest request) {
        // 유저는 테스트용으로
        DetailedIssue issue = issueService.findDetailedIssueById(issueId, new User("sally", null, null, null));
        return ApiResult.ok(issue);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createNewIssue(@RequestBody IssueRequest issueRequest, HttpServletRequest request) {
//        issueService.create(issueRequest, (User) request.getAttribute("user"));
        issueService.create(issueRequest, null);
    }

    @DeleteMapping("/{issueId}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void delete(@PathVariable Long issueId) {
        issueService.delete(issueId);
    }

    @PatchMapping
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void modifyIssueStatuses(@RequestBody IssueStatusRequest issueStatusRequest) {
        issueService.modifyStatus(issueStatusRequest);
    }

    @PatchMapping("/{issueId}/title")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void modifyIssueTitle(@RequestBody Map<String, String> param, @PathVariable Long issueId) {
        issueService.modifyTitle(issueId, param.get("title"));
    }

    @PatchMapping("/{issueId}/assignee")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void modifyIssueAssignee(@RequestBody Map<String, List<Long>> param, @PathVariable Long issueId) {
        issueService.modifyAssignee(issueId, param.get("assignee_ids"));
    }

    @PatchMapping("/{issueId}/milestone")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void modifyIssueMilestone(@RequestBody Map<String, Long> param, @PathVariable Long issueId) {
        issueService.modifyMilestone(issueId, param.get("milestone_id"));
    }

    @PatchMapping("/{issueId}/label")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void modifyIssueLabel(@RequestBody Map<String, List<Long>> param, @PathVariable Long issueId) {
        issueService.modifyLabel(issueId, param.get("label_ids"));
    }

    @PostMapping("/comment")
    @ResponseStatus(HttpStatus.CREATED)
    public void createComment(@RequestBody CommentRequest commentRequest, HttpServletRequest request) {
//        issueService.addComment(commentRequest, (User) request.getAttribute("user"));
        issueService.addComment(commentRequest, userService.findById(1L));
    }
}
