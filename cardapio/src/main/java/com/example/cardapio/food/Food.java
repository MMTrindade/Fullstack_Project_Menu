package com.example.cardapio.food;

//Entity class - Represents a Table

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name="foods")
@Entity(name="foods")
@Getter //Longbock em runtime gera todos os methods de get da classe food para cada uma das propriedades da classe
@NoArgsConstructor // Longbock declara um constructor que nao recebe nenhum argumento
@AllArgsConstructor // Longbock declara um constructor em runtime que recebe todos os argumentos
@EqualsAndHashCode(of = "id")
public class Food {
    @Id @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String image;
    private Integer price;


// Possible to use .image(), because FoodRequestDTO is a record, and Java does it automatically.
    public Food(FoodRequestDTO data){
        this.image = data.image();
        this.price = data.price();
        this.title = data.title();
    }
}
