import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [CommonModule]
})
export class MenuComponent {
  @Input() isMenuOpen: boolean = false; // Menü açılma durumu
  @Output() menuClose = new EventEmitter<void>(); // Menü kapama için dışarıya event gönderir



  imageUrl: string = 'https://cdn.vakko.com/banners/2fd213c0-5aea-4851-931a-3a5f493112f3.jpeg';

  // Fotoğraf yolunu tutan değişken
  selectedImage: string = '';

  hoveredImageUrl: string | null = null;
  isImageVisible: boolean = false;

  showSubMenuAndImage(imageUrl: string) {
    this.hoveredImageUrl = imageUrl;
    this.isImageVisible = true;
  }

  hideSubMenuAndImage() {
    this.isImageVisible = false;
  }



  // Menü durumuna göre sınıf eklemek için yardımcı fonksiyon
  getMenuClass(): string {
    return this.isMenuOpen ? 'sideMenu open' : 'sideMenu'; // Eğer açık ise 'open' sınıfı ekle
  }

  closeMenu(): void {
    this.isMenuOpen = false; // Menü durumunu kapalı yap
    this.menuClose.emit(); // Menü kapanırken üst bileşene bildirim gönder
  }

  // Menü öğesine tıklandığında fotoğrafı değiştirecek fonksiyon
  changeImage(imagePath: string): void {
    this.selectedImage = imagePath; // Seçilen fotoğraf yolunu güncelle
  }


}
