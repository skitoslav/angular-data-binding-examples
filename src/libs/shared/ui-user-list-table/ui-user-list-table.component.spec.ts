import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUserListTableComponent } from './ui-user-list-table.component';

describe('UiUserListTableComponent', () => {
  let component: UiUserListTableComponent;
  let fixture: ComponentFixture<UiUserListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UiUserListTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiUserListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
