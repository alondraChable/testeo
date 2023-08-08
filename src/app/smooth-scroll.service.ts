import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmoothScrollService {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
