import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlantaComponent } from './form-planta.component';

describe('FormPlantaComponent', () => {
  let component: FormPlantaComponent;
  let fixture: ComponentFixture<FormPlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPlantaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
