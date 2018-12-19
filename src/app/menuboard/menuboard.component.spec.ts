import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuboardComponent } from './menuboard.component';

describe('MenuboardComponent', () => {
  let component: MenuboardComponent;
  let fixture: ComponentFixture<MenuboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
