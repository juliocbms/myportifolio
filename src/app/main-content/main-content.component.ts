import { Component, ElementRef, ViewChild } from '@angular/core';
import {  WhatIDoComponent } from "../waht-i-do/what-i-do.component";
import { PortifolioComponent } from "../portifolio/portifolio.component";
import { ContactComponent } from "../contact/contact.component";




@Component({
  selector: 'app-main-content',
  imports: [WhatIDoComponent, WhatIDoComponent, PortifolioComponent, ContactComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

  @ViewChild(WhatIDoComponent, {read: ElementRef}) whatIDoComponent!: ElementRef;

  scrollToWhatIDo() {
    this.whatIDoComponent.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
