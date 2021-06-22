package com.codesquad.issuetracker.service;

import com.codesquad.issuetracker.domain.Milestone;
import com.codesquad.issuetracker.dto.milestone.MilestoneDTO;
import com.codesquad.issuetracker.dto.milestone.MilestoneRequest;
import com.codesquad.issuetracker.exception.NotFoundException;
import com.codesquad.issuetracker.repository.MilestoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MilestoneService {

    private MilestoneRepository milestoneRepository;

    @Autowired
    public MilestoneService(MilestoneRepository milestoneRepository) {
        this.milestoneRepository = milestoneRepository;
    }

    public Milestone findById(Long milestoneId) {
        return milestoneRepository.findById(milestoneId).orElseThrow(NotFoundException::new);
    }

    public void create(MilestoneRequest milestoneRequest) {
        Milestone milestone = new Milestone(milestoneRequest.getTitle(), milestoneRequest.getDescription(), milestoneRequest.getDueDate());
        milestoneRepository.save(milestone);
    }

    public List<MilestoneDTO> browseAll() {
        return milestoneRepository.findAll().stream()
                .map(MilestoneDTO::detailedOf)
                .collect(Collectors.toList());
    }

    public void modify(Long id, MilestoneRequest milestoneRequest) {
        milestoneRepository.save(findById(id).modify(milestoneRequest));
    }

    public void delete(Long id) {
        milestoneRepository.delete(findById(id));
    }
}
