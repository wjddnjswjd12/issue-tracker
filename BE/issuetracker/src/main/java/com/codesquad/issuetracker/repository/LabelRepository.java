package com.codesquad.issuetracker.repository;

import com.codesquad.issuetracker.domain.Label;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LabelRepository extends JpaRepository<Label, Long> {
    List<Label> findByIdIn(List<Long> ids);
}
