import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTaskPageComponent } from './main-task-page.component';

describe('MainTaskPageComponent', () => {
  let component: MainTaskPageComponent;
  let fixture: ComponentFixture<MainTaskPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainTaskPageComponent]
    });
    fixture = TestBed.createComponent(MainTaskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
