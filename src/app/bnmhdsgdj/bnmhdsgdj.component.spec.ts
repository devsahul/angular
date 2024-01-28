import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnmhdsgdjComponent } from './bnmhdsgdj.component';

describe('BnmhdsgdjComponent', () => {
  let component: BnmhdsgdjComponent;
  let fixture: ComponentFixture<BnmhdsgdjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnmhdsgdjComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnmhdsgdjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
