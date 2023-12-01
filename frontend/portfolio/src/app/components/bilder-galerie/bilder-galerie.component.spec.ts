import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilderGalerieComponent } from './bilder-galerie.component';

describe('BilderGalerieComponent', () => {
  let component: BilderGalerieComponent;
  let fixture: ComponentFixture<BilderGalerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilderGalerieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilderGalerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
