import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenschenComponent } from './menschen.component';

describe('MenschenComponent', () => {
  let component: MenschenComponent;
  let fixture: ComponentFixture<MenschenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenschenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenschenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
