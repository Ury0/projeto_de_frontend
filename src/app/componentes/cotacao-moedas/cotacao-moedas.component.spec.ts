import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotacaoMoedasComponent } from './cotacao-moedas.component';

describe('CotacaoMoedasComponent', () => {
  let component: CotacaoMoedasComponent;
  let fixture: ComponentFixture<CotacaoMoedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CotacaoMoedasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotacaoMoedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
