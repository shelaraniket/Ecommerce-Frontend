import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IphonedecComponent } from './iphonedec.component';

describe('IphonedecComponent', () => {
  let component: IphonedecComponent;
  let fixture: ComponentFixture<IphonedecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IphonedecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IphonedecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
