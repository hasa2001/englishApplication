package com.zaviron.englishapplication.service;

import com.zaviron.englishapplication.dao.EnglishRepository;
import com.zaviron.englishapplication.entity.English;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    @Override
    public English findById(int id) {

        Optional<English> result = englishRepository.findById(id);
        English english;
        if (result.isPresent()){
            english=result.get();
        }else {
            throw new RuntimeException("Did not find english word id - " + id);
        }
        return english;
    }
}
