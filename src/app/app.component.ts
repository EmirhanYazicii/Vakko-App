import { Component } from '@angular/core';
import { SpaHeaderComponent } from '../app/spa-header/spa-header.component';
import { MenuComponent } from '../app/menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SpaHeaderComponent, MenuComponent, SliderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isMenuOpen: boolean = false; // Menü durumu

  // Menü açma / kapama fonksiyonu
  toggleMenu(isOpen: boolean): void {
    this.isMenuOpen = isOpen; // Menü durumunu güncelle
  }
}
