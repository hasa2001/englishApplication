package com.zaviron.englishapplication.controller;

import com.zaviron.englishapplication.entity.English;
import com.zaviron.englishapplication.service.EnglishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/english")
public class EnglishController {
    private EnglishService englishService;

    @Autowired
    public EnglishController(EnglishService englishService) {
        this.englishService = englishService;
    }


    @GetMapping("/list")
    public String listDetails(Model model) {
        List<English> englishServiceAll = englishService.findAll();
        model.addAttribute("english", englishServiceAll);
        return "index";
    }

    @PostMapping("/addNewWord")
    public String addNewWord(@RequestParam("word") String word, @RequestParam("description") String description) {
        English english = new English(word, description);
        englishService.save(english);

        return "redirect:/english/list";
    }

}
