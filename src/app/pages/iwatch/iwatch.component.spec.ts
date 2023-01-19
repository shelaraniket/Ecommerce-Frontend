import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IwatchComponent } from './iwatch.component';

describe('IwatchComponent', () => {
  let component: IwatchComponent;
  let fixture: ComponentFixture<IwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IwatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
