import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErapComponent } from './erap.component';

describe('ErapComponent', () => {
  let component: ErapComponent;
  let fixture: ComponentFixture<ErapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
