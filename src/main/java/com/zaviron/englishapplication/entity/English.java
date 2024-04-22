package com.zaviron.englishapplication.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;

@Entity
public class English {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotNull(message = "Word is Required")
    private String word;
    @NotNull(message = "Description is required")
    private String description;

    public English(int id, String word, String description) {
        this.id = id;
        this.word = word;
        this.description = description;
    }

    public English() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getWord() {
        return word;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "English{" +
                "id=" + id +
                ", word='" + word + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
