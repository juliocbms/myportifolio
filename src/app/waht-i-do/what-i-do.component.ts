import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { BarraNavigateMeComponent } from "../barra-navigate-me/barra-navigate-me.component";

@Component({
  selector: 'app-what-i-do',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    BarraNavigateMeComponent
],
  templateUrl: './what-i-do.component.html',
  styleUrls: ['./what-i-do.component.scss']
})
export class WhatIDoComponent {

  ;}
