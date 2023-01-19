import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodsdescriptionComponent } from './podsdescription.component';

describe('PodsdescriptionComponent', () => {
  let component: PodsdescriptionComponent;
  let fixture: ComponentFixture<PodsdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodsdescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodsdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
