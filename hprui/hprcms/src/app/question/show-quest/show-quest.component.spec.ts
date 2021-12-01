import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowQuestComponent } from './show-quest.component';

describe('ShowQuestComponent', () => {
  let component: ShowQuestComponent;
  let fixture: ComponentFixture<ShowQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowQuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
