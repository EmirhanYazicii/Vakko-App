import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  imports: [CommonModule] // CommonModule'ı buraya ekle
})
export class SliderComponent {
  images = [
    'https://vakko-video.mncdn.com/f2/VAKKO-fw2425-sezon-video-web_f2.mp4',
    'https://cdn.vakko.com/banners/b0aa1829-38ca-43d1-bfbe-6b32e83ab132.jpeg',
    'https://cdn.vakko.com/banners/ad3ee5bd-8322-47c7-9215-e8764ee8004b.jpeg',
    'https://cdn.vakko.com/banners/d19a136b-1fd5-4a68-857b-3b7f1a0dec82.jpeg',
    'https://cdn.vakko.com/banners/c14980c6-60d6-4a68-b175-4bcfeb2150bd.jpeg',
    'https://cdn.vakko.com/banners/49d91822-c59f-4ec0-9d91-ed100bbbe7c9.jpeg',
    'https://cdn.vakko.com/banners/ebecff34-2ce7-4beb-8db2-7c0243f2a487.jpeg',
    'https://cdn.vakko.com/banners/8879232a-c74b-446e-a59c-2066d75fb2e3.jpeg',
    'https://cdn.vakko.com/banners/fe88b12f-a26f-43f2-9645-d3129ca60039.jpeg',
    'https://cdn.vakko.com/banners/4653bd0a-a9c3-48aa-9916-d4007d24120c.jpeg',
    'https://cdn.vakko.com/banners/89892842-e771-4ad3-8adf-5a6c193884ce.jpeg',
    'https://cdn.vakko.com/banners/518bd97c-2821-4828-b28f-5baea160ca8e.jpeg',
    'https://cdn.vakko.com/banners/651c091d-2b3c-4aa9-8c4b-08977378536b.jpeg',
    'https://cdn.vakko.com/banners/b7389121-ed88-44b3-965d-737440b498c5.jpeg'
  ];

  currentIndex = 0;
  translateY = 0;

  private lastWheelTime = 0;

  onWheel(event: WheelEvent): void {
    const currentTime = Date.now();

    if (currentTime - this.lastWheelTime > 1000) {
      if (event.deltaY > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
      this.lastWheelTime = currentTime;
    }
  }

  nextSlide(): void {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
      this.translateY = -this.currentIndex * 100; // Her slayt için 100vh aşağı kaydır
    }
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.translateY = -this.currentIndex * 100;
    }
  }

  goToFirstSlide(): void {
    this.currentIndex = 0;
    this.translateY = 0;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.translateY = -index * 100;
  }
}
