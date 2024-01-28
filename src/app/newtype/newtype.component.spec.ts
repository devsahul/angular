import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtypeComponent } from './newtype.component';

describe('NewtypeComponent', () => {
  let component: NewtypeComponent;
  let fixture: ComponentFixture<NewtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewtypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
