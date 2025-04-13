import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavigateMeComponent } from './barra-navigate-me.component';

describe('BarraNavigateMeComponent', () => {
  let component: BarraNavigateMeComponent;
  let fixture: ComponentFixture<BarraNavigateMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraNavigateMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraNavigateMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
