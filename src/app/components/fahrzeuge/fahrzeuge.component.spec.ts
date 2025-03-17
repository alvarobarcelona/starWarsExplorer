import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahrzeugeComponent } from './fahrzeuge.component';

describe('FahrzeugeComponent', () => {
  let component: FahrzeugeComponent;
  let fixture: ComponentFixture<FahrzeugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FahrzeugeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FahrzeugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
