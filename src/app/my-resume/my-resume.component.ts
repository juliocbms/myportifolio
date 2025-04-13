import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-resume',
  imports: [],
  templateUrl: './my-resume.component.html',
  styleUrl: './my-resume.component.scss'
})
export class MyResumeComponent {
  @Input() selectedTabIndex: number = 0;
}
