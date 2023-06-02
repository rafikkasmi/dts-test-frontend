import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraTaskFormComponent } from './jira-task-form.component';

describe('JiraTaskFormComponent', () => {
  let component: JiraTaskFormComponent;
  let fixture: ComponentFixture<JiraTaskFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JiraTaskFormComponent]
    });
    fixture = TestBed.createComponent(JiraTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
