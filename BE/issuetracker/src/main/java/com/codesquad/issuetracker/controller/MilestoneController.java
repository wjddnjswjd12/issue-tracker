package com.codesquad.issuetracker.controller;

import com.codesquad.issuetracker.dto.ApiResult;
import com.codesquad.issuetracker.dto.milestone.MilestoneDTO;
import com.codesquad.issuetracker.dto.milestone.MilestoneRequest;
import com.codesquad.issuetracker.service.MilestoneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/milestone")
public class MilestoneController {

    private MilestoneService milestoneService;

    @Autowired
    public MilestoneController(MilestoneService milestoneService) {
        this.milestoneService = milestoneService;
    }

    @GetMapping
    public ApiResult<List<MilestoneDTO>> browseAll() {
        return ApiResult.ok(milestoneService.browseAll());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@RequestBody MilestoneRequest milestoneRequest) {
        milestoneService.create(milestoneRequest);
    }

    @PutMapping("/{milestoneId}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void modify(@PathVariable Long milestoneId, @RequestBody MilestoneRequest milestoneRequest) {
        milestoneService.modify(milestoneId, milestoneRequest);
    }
}
