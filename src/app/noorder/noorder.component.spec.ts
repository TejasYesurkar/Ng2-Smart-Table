import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoorderComponent } from './noorder.component';

describe('NoorderComponent', () => {
  let component: NoorderComponent;
  let fixture: ComponentFixture<NoorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
