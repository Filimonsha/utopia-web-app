package com.isbd.utopiawebapp.familyandcraft.common.controller;

import com.isbd.utopiawebapp.familyandcraft.common.model.Report;
import com.isbd.utopiawebapp.familyandcraft.common.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ReportController {
    @Autowired
    private ReportRepository reportRepository;

    @GetMapping("/reports")
    public Iterable<Report> getReports() {
        Sort sort = Sort.by(Sort.Direction.DESC, "id");
        return reportRepository.findAll(sort);
    }
}
