import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConversorComponent } from './conversor.component';
import { MoedaService, ConversorService } from '../services';

describe('ConversorComponent', () => {
  let component: ConversorComponent;
  let fixture: ComponentFixture<ConversorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversorComponent
        ],
      providers: [MoedaService, ConversorService],
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
