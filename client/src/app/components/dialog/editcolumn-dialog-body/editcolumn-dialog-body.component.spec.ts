import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcolumnDialogBodyComponent } from './editcolumn-dialog-body.component';

describe('EditcolumnDialogBodyComponent', () => {
  let component: EditcolumnDialogBodyComponent;
  let fixture: ComponentFixture<EditcolumnDialogBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcolumnDialogBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcolumnDialogBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
