import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollerFormComponent } from './roller-form.component';

describe('RollerFormComponent', () => {
  let component: RollerFormComponent;
  let fixture: ComponentFixture<RollerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RollerFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RollerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
