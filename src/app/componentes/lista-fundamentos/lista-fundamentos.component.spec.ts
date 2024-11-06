import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFundamentosComponent } from './lista-fundamentos.component';

describe('ListaFundamentosComponent', () => {
  let component: ListaFundamentosComponent;
  let fixture: ComponentFixture<ListaFundamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaFundamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFundamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
