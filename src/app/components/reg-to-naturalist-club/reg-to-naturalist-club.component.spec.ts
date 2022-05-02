import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegToNaturalistClubComponent } from './reg-to-naturalist-club.component';

describe('RegToNaturalistClubComponent', () => {
  let component: RegToNaturalistClubComponent;
  let fixture: ComponentFixture<RegToNaturalistClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegToNaturalistClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegToNaturalistClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
