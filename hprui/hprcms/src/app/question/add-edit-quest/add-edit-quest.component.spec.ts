import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditQuestComponent } from './add-edit-quest.component';

describe('AddEditQuestComponent', () => {
  let component: AddEditQuestComponent;
  let fixture: ComponentFixture<AddEditQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditQuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
