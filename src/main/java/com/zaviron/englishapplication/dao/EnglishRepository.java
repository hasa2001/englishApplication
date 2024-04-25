package com.zaviron.englishapplication.dao;

import com.zaviron.englishapplication.entity.English;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnglishRepository extends JpaRepository<English,Integer> {
}
