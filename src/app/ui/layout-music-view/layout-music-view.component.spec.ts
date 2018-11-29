import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMusicViewComponent } from './layout-music-view.component';

describe('LayoutMusicViewComponent', () => {
  let component: LayoutMusicViewComponent;
  let fixture: ComponentFixture<LayoutMusicViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutMusicViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutMusicViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
