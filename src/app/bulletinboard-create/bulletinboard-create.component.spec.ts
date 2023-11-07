import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinboardCreateComponent } from './bulletinboard-create.component';

describe('BulletinboardCreateComponent', () => {
  let component: BulletinboardCreateComponent;
  let fixture: ComponentFixture<BulletinboardCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulletinboardCreateComponent]
    });
    fixture = TestBed.createComponent(BulletinboardCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
