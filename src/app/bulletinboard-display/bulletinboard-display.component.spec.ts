import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinboardDisplayComponent } from './bulletinboard-display.component';

describe('BulletinboardDisplayComponent', () => {
  let component: BulletinboardDisplayComponent;
  let fixture: ComponentFixture<BulletinboardDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulletinboardDisplayComponent]
    });
    fixture = TestBed.createComponent(BulletinboardDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
