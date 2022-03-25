import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcardDialogComponent } from './editcard-dialog.component';

describe('EditcardDialogComponent', () => {
  let component: EditcardDialogComponent;
  let fixture: ComponentFixture<EditcardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcardDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
