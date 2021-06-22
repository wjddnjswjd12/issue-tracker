package com.codesquad.issuetracker.controller;

import com.codesquad.issuetracker.dto.ApiResult;
import com.codesquad.issuetracker.dto.milestone.MilestoneDTO;
import com.codesquad.issuetracker.dto.milestone.MilestoneRequest;
import com.codesquad.issuetracker.service.MilestoneService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public ApiResult<String> create(@RequestBody MilestoneRequest milestoneRequest) {
        milestoneService.create(milestoneRequest);
        return ApiResult.ok("Ok");
    }

    @PutMapping("/{milestoneId}")
    public ApiResult<String> modify(@PathVariable Long milestoneId, @RequestBody MilestoneRequest milestoneRequest) {
        milestoneService.modify(milestoneId, milestoneRequest);
        return ApiResult.ok("Ok");
    }
}
