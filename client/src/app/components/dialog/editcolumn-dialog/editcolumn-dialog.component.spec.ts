import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcolumnDialogComponent } from './editcolumn-dialog.component';

describe('EditcolumnDialogComponent', () => {
  let component: EditcolumnDialogComponent;
  let fixture: ComponentFixture<EditcolumnDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcolumnDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcolumnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
