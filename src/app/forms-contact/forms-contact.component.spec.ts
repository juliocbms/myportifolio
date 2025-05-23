import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsContactComponent } from './forms-contact.component';

describe('FormsContactComponent', () => {
  let component: FormsContactComponent;
  let fixture: ComponentFixture<FormsContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
