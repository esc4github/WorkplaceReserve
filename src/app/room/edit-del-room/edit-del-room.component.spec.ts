import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDelRoomComponent } from './edit-del-room.component';

describe('EditDelRoomComponent', () => {
  let component: EditDelRoomComponent;
  let fixture: ComponentFixture<EditDelRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDelRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDelRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
