import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarteiraComponent } from './carteira.component';

describe('CarteiraComponent', () => {
  let component: CarteiraComponent;
  let fixture: ComponentFixture<CarteiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarteiraComponent],
      imports: [], 
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(CarteiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct default values', () => {
    expect(component.economias).toBe(5000.00);
    expect(component.gastos).toBe(1200.50);
    expect(component.investimentos).toBe(3000.00);
    expect(component.listaInvestimentos.length).toBeGreaterThan(0);
    expect(component.listaGastos.length).toBeGreaterThan(0);
  });

  it('should calculate the remaining balance correctly', () => {
    component.calcularSaldo();
    const totalGastos = component.listaGastos.reduce((sum, gasto) => sum + gasto.valor, 0);
    const expectedSaldo = component.economias - totalGastos;
    expect(component.saldoDisponivel).toBe(expectedSaldo);
  });
});
