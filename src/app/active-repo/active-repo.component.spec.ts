import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveRepoComponent } from './active-repo.component';

describe('ActiveRepoComponent', () => {
  let component: ActiveRepoComponent;
  let fixture: ComponentFixture<ActiveRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
