import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MyResumeComponent } from '../my-resume/my-resume.component';
import { MyBiographyComponent } from "../my-biography/my-biography.component";
import { MySkillComponent } from "../my-skill/my-skill.component";


@Component({
  selector: 'app-barra-navigate-me',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MyResumeComponent,
    MyBiographyComponent,
    MySkillComponent
],
  templateUrl: './barra-navigate-me.component.html',
  styleUrls: ['./barra-navigate-me.component.scss']
})
export class BarraNavigateMeComponent implements OnInit {
  selectedIndex = 0;

  ngOnInit() {
    this.selectedIndex = 0;
  }

  tabs = [
    { label: 'BIOGRAPHY' },
    { label: 'SKILLS' },
    { label: 'EADUCATION' }
  ];

  selectTab(index: number): void {
    this.selectedIndex = index;
  }
}

