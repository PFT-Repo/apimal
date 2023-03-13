import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatapiComponent } from './catapi.component';

describe('CatapiComponent', () => {
  let component: CatapiComponent;
  let fixture: ComponentFixture<CatapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
