import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureClubComponent } from './nature-club.component';

describe('NatureClubComponent', () => {
  let component: NatureClubComponent;
  let fixture: ComponentFixture<NatureClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatureClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NatureClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
