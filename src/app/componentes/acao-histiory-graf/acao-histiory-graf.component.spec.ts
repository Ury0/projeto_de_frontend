import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaoHistioryGrafComponent } from './acao-histiory-graf.component';

describe('AcaoHistioryGrafComponent', () => {
  let component: AcaoHistioryGrafComponent;
  let fixture: ComponentFixture<AcaoHistioryGrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcaoHistioryGrafComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcaoHistioryGrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
