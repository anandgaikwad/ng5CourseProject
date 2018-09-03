import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCatComponent } from './add.component';

describe('AddComponent', () => {
  let component: AddCatComponent;
  let fixture: ComponentFixture<AddCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
