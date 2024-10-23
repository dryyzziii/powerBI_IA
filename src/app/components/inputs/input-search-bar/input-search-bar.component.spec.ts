import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchBarComponent } from './input-search-bar.component';

describe('InputSearchBarComponent', () => {
  let component: InputSearchBarComponent;
  let fixture: ComponentFixture<InputSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputSearchBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
