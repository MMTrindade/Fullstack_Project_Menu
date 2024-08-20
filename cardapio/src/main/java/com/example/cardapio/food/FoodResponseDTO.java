package com.example.cardapio.food;

// O uso do @Getter em Food permite que seja possível utilizar esses get methods abaixo
public record FoodResponseDTO(Long id, String title, String image, Integer price) {
    public FoodResponseDTO(Food food) {
        this(food.getId(), food.getTitle(), food.getImage(), food.getPrice());
    }
}
