import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBiographyComponent } from './my-biography.component';

describe('MyBiographyComponent', () => {
  let component: MyBiographyComponent;
  let fixture: ComponentFixture<MyBiographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyBiographyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBiographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
