import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditQlupComponent } from './add-edit-qlup.component';

describe('AddEditQlupComponent', () => {
  let component: AddEditQlupComponent;
  let fixture: ComponentFixture<AddEditQlupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditQlupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditQlupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
