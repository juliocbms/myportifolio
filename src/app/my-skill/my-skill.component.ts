import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { HardSkillsComponent } from "../hard-skills/hard-skills.component";
import { SoftSkillComponent } from "../soft-skill/soft-skill.component";

@Component({
  selector: 'app-my-skill',
  imports: [CommonModule,
    MatTabsModule,
    MatIconModule,
    HardSkillsComponent, SoftSkillComponent],
  templateUrl: './my-skill.component.html',
  styleUrl: './my-skill.component.scss'
})
export class MySkillComponent {
  selectedIndex = 0;

  tabs = [
    { label: 'Hard Skills' },
    { label: 'Soft Skills' }
  ];


  selectTab(index: number): void {
    this.selectedIndex = index;
  }

  nextTab(): void {
    this.selectedIndex = (this.selectedIndex + 1) % this.tabs.length;
  }

  prevTab(): void {
    this.selectedIndex = (this.selectedIndex - 1 + this.tabs.length) % this.tabs.length;
  }
}
