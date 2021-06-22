package com.codesquad.issuetracker.service;

import com.codesquad.issuetracker.domain.Issue;
import com.codesquad.issuetracker.domain.User;
import com.codesquad.issuetracker.dto.issue.request.IssueRequest;
import com.codesquad.issuetracker.dto.issue.request.IssueStatusRequest;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest
@TestPropertySource("classpath:application-test.properties")
@Transactional
class IssueServiceTest {

    private IssueService issueService;

    @Autowired
    public IssueServiceTest(IssueService issueService) {
        this.issueService = issueService;
    }

    @Test
    @DisplayName("타이틀 수정")
    void modifyTitle() {
        String newTitle = "new title";

        Issue issue = issueService.modifyTitle(1L, newTitle);
        Issue modifiedIssue = issueService.findById(1L);

        assertThat(issue.getTitle()).isEqualTo(modifiedIssue.getTitle());
    }

    @Test
    @DisplayName("마일스톤 수정")
    void modifyMilestone() {
        Issue issue = issueService.modifyMilestone(1L, 2L);
        Issue modifiedIssue = issueService.findById(1L);

        assertThat(issue.getMileStone()).isEqualTo(modifiedIssue.getMileStone());
    }

    @Test
    @DisplayName("어사이니 수정")
    void modifyAssignee() {
        List<Long> assigneeIds = new ArrayList<>();
        assigneeIds.add(1L);
        assigneeIds.add(2L);
        assigneeIds.add(3L);

        Issue issue = issueService.modifyAssignee(1L, assigneeIds);
        Issue modifiedIssue = issueService.findById(1L);

        for (User user : modifiedIssue.getAssignee()) {
            System.out.println(user.getName());
        }

        assertThat(issue.getAssignee()).isEqualTo(modifiedIssue.getAssignee());
    }

    @Test
    void modifyLabel() {
    }

    @Test
    void modifyStatus() {
        List<Long> ids = new ArrayList<>();
        ids.add(1L);
        ids.add(2L);
        ids.add(3L);

        IssueStatusRequest issueStatusRequest = new IssueStatusRequest(ids, false);

        List<Issue> modifiedIssues = issueService.modifyStatus(issueStatusRequest);

        assertThat(modifiedIssues.get(0).isOpen()).isEqualTo(false);
    }

    @Test
    @DisplayName("생성확인")
    void create() {
//        User user = mock(User.class);
//        when(user.getId()).thenReturn(1L);
//
//        IssueRequest issueRequest = new IssueRequest("title", "content", )
//        issueService.create();
    }
}
