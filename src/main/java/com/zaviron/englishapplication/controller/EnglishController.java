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
//        StringBuilder builder =new StringBuilder();
//        builder.append(" <div class=\"accordion-item\" th:each=\"englishDetails:${english}\">\n" +
//                "                    <h2 class=\"accordion-header\">\n" +
//                "                        <button class=\"accordion-button collapsed\" type=\"button\" th:text=\"${englishDetails.word}\" data-bs-toggle=\"collapse\" data-bs-target=\"#flush-collapseOne\" aria-expanded=\"false\" aria-controls=\"flush-collapseOne\">\n" +
//                "\n" +
//                "                        "+word+"</button>\n" +
//                "                    </h2>\n" +
//                "                    <div id=\"flush-collapseOne\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionFlushExample\">\n" +
//                "                        <div class=\"accordion-body\" th:text=\"${englishDetails.description}\">"+description+"</div>\n" +
//                "                    </div>\n" +
//                "                </div>");
//        return builder.toString();
        return "redirect:/english/list";
    }
}
