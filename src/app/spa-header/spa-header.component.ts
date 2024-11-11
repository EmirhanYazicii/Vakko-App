import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './spa-header.component.html',
  styleUrls: ['./spa-header.component.css'],
})
export class SpaHeaderComponent  {
  @Output() menuToggle = new EventEmitter<boolean>();
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuToggle.emit(this.isMenuOpen); // Menü açılma durumunu parent component'e ilet
  }
}

