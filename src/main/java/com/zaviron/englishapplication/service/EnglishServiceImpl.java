package com.zaviron.englishapplication.service;

import com.zaviron.englishapplication.dao.EnglishRepository;
import com.zaviron.englishapplication.entity.English;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EnglishServiceImpl implements EnglishService{

    private EnglishRepository englishRepository;
    @Autowired
    public EnglishServiceImpl(EnglishRepository englishRepository) {
        this.englishRepository = englishRepository;
    }

    @Override
    public List<English> findAll() {
        return englishRepository.findAll();
    }

    @Override
    public void save(English english) {
        englishRepository.save(english);
    }
}
