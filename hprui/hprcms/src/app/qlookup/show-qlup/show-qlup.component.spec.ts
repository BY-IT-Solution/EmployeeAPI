import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowQlupComponent } from './show-qlup.component';

describe('ShowQlupComponent', () => {
  let component: ShowQlupComponent;
  let fixture: ComponentFixture<ShowQlupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowQlupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowQlupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
