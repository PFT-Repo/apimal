import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatapiCardComponent } from './catapi-card.component';

describe('CatapiCardComponent', () => {
  let component: CatapiCardComponent;
  let fixture: ComponentFixture<CatapiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatapiCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatapiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
