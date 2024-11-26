import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeLogInComponent } from './forme-log-in.component';

describe('FormeLogInComponent', () => {
  let component: FormeLogInComponent;
  let fixture: ComponentFixture<FormeLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormeLogInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormeLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
