import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTaskFormComponent } from './main-task-form.component';

describe('MainTaskFormComponent', () => {
  let component: MainTaskFormComponent;
  let fixture: ComponentFixture<MainTaskFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainTaskFormComponent]
    });
    fixture = TestBed.createComponent(MainTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
