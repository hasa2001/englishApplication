package com.zaviron.englishapplication.service;

import com.zaviron.englishapplication.entity.English;

import java.util.List;

public interface EnglishService {
    List<English> findAll();
    void save(English english);

}
