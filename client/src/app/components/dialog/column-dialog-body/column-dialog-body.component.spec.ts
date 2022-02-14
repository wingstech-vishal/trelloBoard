import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnDialogBodyComponent } from './column-dialog-body.component';

describe('ColumnDialogBodyComponent', () => {
  let component: ColumnDialogBodyComponent;
  let fixture: ComponentFixture<ColumnDialogBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnDialogBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnDialogBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
