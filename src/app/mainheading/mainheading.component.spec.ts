import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainheadingComponent } from './mainheading.component';

describe('MainheadingComponent', () => {
  let component: MainheadingComponent;
  let fixture: ComponentFixture<MainheadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainheadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
