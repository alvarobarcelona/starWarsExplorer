import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenschenDetailsComponent } from './menschen-details.component';

describe('MenschenDetailsComponent', () => {
  let component: MenschenDetailsComponent;
  let fixture: ComponentFixture<MenschenDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenschenDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenschenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
