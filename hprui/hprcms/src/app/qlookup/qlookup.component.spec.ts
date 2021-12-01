import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlookupComponent } from './qlookup.component';

describe('QlookupComponent', () => {
  let component: QlookupComponent;
  let fixture: ComponentFixture<QlookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QlookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QlookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
