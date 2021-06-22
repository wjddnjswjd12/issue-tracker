package com.codesquad.issuetracker.controller;

import com.codesquad.issuetracker.dto.ApiResult;
import com.codesquad.issuetracker.dto.label.LabelDTO;
import com.codesquad.issuetracker.dto.label.LabelRequest;
import com.codesquad.issuetracker.service.LabelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/label")
public class LabelController {

    private LabelService labelService;

    @Autowired
    public LabelController(LabelService labelService) {
        this.labelService = labelService;
    }

    @GetMapping
    public ApiResult<List<LabelDTO>> browseAll() {
        return ApiResult.ok(labelService.browseAll());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@RequestBody LabelRequest labelRequest) {
        labelService.create(labelRequest);
    }

    @PutMapping("/{labelId}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void modify(@PathVariable Long labelId, @RequestBody LabelRequest labelRequest) {
        labelService.modify(labelId, labelRequest);
    }

    @DeleteMapping("/{labelId}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void delete(@PathVariable Long labelId) {
        labelService.delete(labelId);
    }
}
