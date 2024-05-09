import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPublicitarioComponent } from './banner-publicitario.component';

describe('BannerPublicitarioComponent', () => {
  let component: BannerPublicitarioComponent;
  let fixture: ComponentFixture<BannerPublicitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerPublicitarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerPublicitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
