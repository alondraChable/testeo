import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-areas-legales',
  templateUrl: './areas-legales.component.html',
  styleUrls: ['./areas-legales.component.css']
})
export class AreasLegalesComponent implements OnInit {
  cards: string[] = ['Tarjeta 1', 'Tarjeta 2', 'Tarjeta 3', 'Tarjeta 4', 'Tarjeta 5', 'Tarjeta 6'];
  currentIndex = 0;

  prevSlide() {
    this.currentIndex = Math.max(this.currentIndex - 3, 0);
    this.updateCarousel();
  }

  nextSlide() {
    this.currentIndex = Math.min(this.currentIndex + 3, this.cards.length - 3);
    this.updateCarousel();
  }

  updateCarousel() {
    const cardWidth = (document.querySelector('.card') as HTMLElement).offsetWidth + 20;
    const translateX = -this.currentIndex * cardWidth;
    const carousel = document.querySelector('.carousel') as HTMLElement;
    carousel.style.transform = `translateX(${translateX}px)`;
    this.updatePagination();
  }

  updatePagination() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      (card as HTMLElement).style.order = (index - this.currentIndex + 1).toString();
    });
  }

  ngOnInit(): void {
    this.updateCarousel();
  }
}