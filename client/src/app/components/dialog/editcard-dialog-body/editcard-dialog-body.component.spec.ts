import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcardDialogBodyComponent } from './editcard-dialog-body.component';

describe('EditcardDialogBodyComponent', () => {
  let component: EditcardDialogBodyComponent;
  let fixture: ComponentFixture<EditcardDialogBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcardDialogBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcardDialogBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
