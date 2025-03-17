import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroidenComponent } from './droiden.component';

describe('DroidenComponent', () => {
  let component: DroidenComponent;
  let fixture: ComponentFixture<DroidenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DroidenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroidenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
