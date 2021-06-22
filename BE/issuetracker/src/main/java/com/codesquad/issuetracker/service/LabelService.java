package com.codesquad.issuetracker.service;

import com.codesquad.issuetracker.domain.Label;
import com.codesquad.issuetracker.dto.label.LabelDTO;
import com.codesquad.issuetracker.dto.label.LabelRequest;
import com.codesquad.issuetracker.exception.NotFoundException;
import com.codesquad.issuetracker.repository.LabelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LabelService {

    private LabelRepository labelRepository;

    @Autowired
    public LabelService(LabelRepository labelRepository) {
        this.labelRepository = labelRepository;
    }

    public Label findById(Long id) {
        return labelRepository.findById(id).orElseThrow(NotFoundException::new);
    }

    public List<LabelDTO> browseAll() {
        return labelRepository.findAll().stream()
                .map(LabelDTO::of)
                .collect(Collectors.toList());
    }

    public void create(LabelRequest labelRequest) {
        labelRepository.save(new Label(labelRequest.getTitle(), labelRequest.getColor(), labelRequest.getDescription()));
    }

    public void modify(Long id, LabelRequest labelRequest) {
        labelRepository.save(findById(id).modify(labelRequest));
    }

    public List<Label> findAllLabelByIds(List<Long> ids) {
        if (ids.size() == 0) {
            return null;
        }
        return labelRepository.findByIdIn(ids);
    }

    public void delete(Long id) {
        labelRepository.delete(findById(id));
    }
}
