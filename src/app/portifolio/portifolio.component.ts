import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';


@Component({
  selector: 'app-portifolio',
  imports: [CommonModule,
    MatTabsModule,
    MatIconModule,
    ],
  templateUrl: './portifolio.component.html',
  styleUrl: './portifolio.component.scss'
})
export class PortifolioComponent {
  selectedIndex = 0;

  tabs = [
    { label: '' },
    //{ label: '' }
  ];


  //selectTab(index: number): void {
  //  this.selectedIndex = index;
 // }

 // nextTab(): void {
 //   this.selectedIndex = (this.selectedIndex + 1) % this.tabs.length;
 // }

 // prevTab(): void {
 //   this.selectedIndex = (this.selectedIndex - 1 + this.tabs.length) % this.tabs.length;
 // }
}
