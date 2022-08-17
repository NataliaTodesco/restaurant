import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css'],
})
export class PlatosComponent implements OnInit {
  platos: Array<Object> = [
    {
      id: 382421,
      title: 'Chocolate Gluten-Free Yogurt',
      image: 'https://images.spoonacular.com/file/wximages/382421-312x231.jpg',
      imageType: 'jpg',
      restaurantChain: 'Yogurt Mountain',
      servingSize: '3.14oz',
      readableServingSize: '3.14oz',
      servings: {
        number: 1.0,
        size: 3.14,
        unit: 'oz',
      },
    },
    {
      id: 382413,
      title: 'Blue Ocean Sorbet Gluten-Free Yogurt',
      image: 'https://images.spoonacular.com/file/wximages/382413-312x231.jpg',
      imageType: 'jpg',
      restaurantChain: 'Yogurt Mountain',
      servingSize: '3.14oz',
      readableServingSize: '3.14oz',
      servings: {
        number: 1.0,
        size: 3.14,
        unit: 'oz',
      },
    },
    {
      id: 382461,
      title: 'Iced Cinnamon Roll Gluten-Free Yogurt',
      image: 'https://images.spoonacular.com/file/wximages/382461-312x231.jpg',
      imageType: 'jpg',
      restaurantChain: 'Yogurt Mountain',
      servingSize: '3.14oz',
      readableServingSize: '3.14oz',
      servings: {
        number: 1.0,
        size: 3.14,
        unit: 'oz',
      },
    },
    {
      id: 382393,
      title: 'Cherry Amaretto Nonfat Yogurt',
      image: 'https://images.spoonacular.com/file/wximages/382393-312x231.jpg',
      imageType: 'jpg',
      restaurantChain: 'Yogurt Mountain',
      servingSize: '3.14oz',
      readableServingSize: '3.14oz',
      servings: {
        number: 1.0,
        size: 3.14,
        unit: 'oz',
      },
    },
    {
      id: 382477,
      title: 'Red Velvet Cupcake Gluten-Free Yogurt',
      image: 'https://images.spoonacular.com/file/wximages/382477-312x231.jpg',
      imageType: 'jpg',
      restaurantChain: 'Yogurt Mountain',
      servingSize: '3.14oz',
      readableServingSize: '3.14oz',
      servings: {
        number: 1.0,
        size: 3.14,
        unit: 'oz',
      },
    },
    {
      id: 382409,
      title: 'Toasted Coconut Nonfat Yogurt',
      image: 'https://images.spoonacular.com/file/wximages/382409-312x231.jpg',
      imageType: 'jpg',
      restaurantChain: 'Yogurt Mountain',
      servingSize: '3.14oz',
      readableServingSize: '3.14oz',
      servings: {
        number: 1.0,
        size: 3.14,
        unit: 'oz',
      },
    },
    {
      id: 382381,
      title: 'Triple Chocolate Low Fat Yogurt',
      image: 'https://images.spoonacular.com/file/wximages/382381-312x231.jpg',
      imageType: 'jpg',
      restaurantChain: 'Yogurt Mountain',
      servingSize: '3.14oz',
      readableServingSize: '3.14oz',
      servings: {
        number: 1.0,
        size: 3.14,
        unit: 'oz',
      },
    },
    {
      id: 382488,
      title: 'Watermelon Sorbet Gluten-Free Yogurt',
      image: 'https://images.spoonacular.com/file/wximages/382488-312x231.jpg',
      imageType: 'jpg',
      restaurantChain: 'Yogurt Mountain',
      servingSize: '3.14oz',
      readableServingSize: '3.14oz',
      servings: {
        number: 1.0,
        size: 3.14,
        unit: 'oz',
      },
    },
    {
      id: 382374,
      title: 'Red Velvet Cupcake Low Fat Yogurt',
      image: 'https://images.spoonacular.com/file/wximages/382374-312x231.jpg',
      imageType: 'jpg',
      restaurantChain: 'Yogurt Mountain',
      servingSize: '3.14oz',
      readableServingSize: '3.14oz',
      servings: {
        number: 1.0,
        size: 3.14,
        unit: 'oz',
      },
    },
    {
      id: 382382,
      title: 'No Sugar Added Olde Fashioned Vanilla Nonfat Yogurt',
      image: 'https://images.spoonacular.com/file/wximages/382382-312x231.jpg',
      imageType: 'jpg',
      restaurantChain: 'Yogurt Mountain',
      servingSize: '3.17oz',
      readableServingSize: '3.17oz',
      servings: {
        number: 1.0,
        size: 3.17,
        unit: 'oz',
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  getPlato() {}
}
