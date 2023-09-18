import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnplashImgComponent } from './unplash-img.component';

describe('UnplashImgComponent', () => {
  let component: UnplashImgComponent;
  let fixture: ComponentFixture<UnplashImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnplashImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnplashImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
