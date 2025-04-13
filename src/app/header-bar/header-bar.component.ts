import { Component, ElementRef, ViewChild } from '@angular/core';
import { WhatIDoComponent } from '../waht-i-do/what-i-do.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header-bar',
  imports: [MatIconModule],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.scss'
})
export class HeaderBarComponent {

  @ViewChild(WhatIDoComponent, {read: ElementRef}) whatIDoComponent!: ElementRef;

  scrollToWhatIDo() {
    const element = document.getElementById('what-i-do');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToPortifolio() {
    const element = document.getElementById('portifolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
