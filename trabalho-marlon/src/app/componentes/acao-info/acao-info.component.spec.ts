import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaoInfoComponent } from './acao-info.component';

describe('AcaoInfoComponent', () => {
  let component: AcaoInfoComponent;
  let fixture: ComponentFixture<AcaoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcaoInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcaoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
