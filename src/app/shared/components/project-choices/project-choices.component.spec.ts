import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectChoicesComponent } from './project-choices.component';

describe('ProjectChoicesComponent', () => {
  let component: ProjectChoicesComponent;
  let fixture: ComponentFixture<ProjectChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectChoicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
