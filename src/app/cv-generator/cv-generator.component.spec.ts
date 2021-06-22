import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvGeneratorComponent } from './cv-generator.component';

describe('CvGeneratorComponent', () => {
  let component: CvGeneratorComponent;
  let fixture: ComponentFixture<CvGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
