import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpecificRequestComponent } from './view-specific-request.component';

describe('ViewSpecificRequestComponent', () => {
  let component: ViewSpecificRequestComponent;
  let fixture: ComponentFixture<ViewSpecificRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSpecificRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSpecificRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
