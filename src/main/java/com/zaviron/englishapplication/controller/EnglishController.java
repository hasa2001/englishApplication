package com.zaviron.englishapplication.controller;

import com.zaviron.englishapplication.entity.English;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/english")
public class EnglishController {
    @GetMapping("/list")
    public String listDetails( ){
        return "index";
    }
    @PostMapping("/addNewWord")
    public String addNewWord(Model model){
        model.addAttribute("english",new English());
        return "index";
    }
}
