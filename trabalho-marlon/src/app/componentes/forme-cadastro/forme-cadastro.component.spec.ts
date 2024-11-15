import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeCadastroComponent } from './forme-cadastro.component';

describe('FormeCadastroComponent', () => {
  let component: FormeCadastroComponent;
  let fixture: ComponentFixture<FormeCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormeCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormeCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
