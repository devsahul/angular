import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SahultestComponent } from './sahultest.component';

describe('SahultestComponent', () => {
  let component: SahultestComponent;
  let fixture: ComponentFixture<SahultestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SahultestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SahultestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
