import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeathureComponent } from './feathure.component';

describe('FeathureComponent', () => {
  let component: FeathureComponent;
  let fixture: ComponentFixture<FeathureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeathureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeathureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
