import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IwatchdescriptionComponent } from './iwatchdescription.component';

describe('IwatchdescriptionComponent', () => {
  let component: IwatchdescriptionComponent;
  let fixture: ComponentFixture<IwatchdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IwatchdescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IwatchdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
