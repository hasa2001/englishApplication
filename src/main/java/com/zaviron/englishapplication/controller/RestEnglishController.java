package com.zaviron.englishapplication.controller;

import com.zaviron.englishapplication.entity.English;
import com.zaviron.englishapplication.service.EnglishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
public class RestEnglishController {
    private EnglishService englishService;

    @Autowired
    public RestEnglishController(EnglishService englishService) {
        this.englishService = englishService;
    }
    @GetMapping("/english/viewDescription")
    public English viewWordDescription(@RequestParam("id")int wordId, Model model){
        English english = englishService.findById(wordId);
        model.addAttribute("english",english);
        return english;

    }
    @PostMapping("/english/update")
    public English update(@RequestParam("id")int word,@RequestParam("text")String text, Model model){
        English english = englishService.findById(word);
        model.addAttribute("english",english);
        english.setDescription(text);
        englishService.save(english);
        return english;
    }
}
