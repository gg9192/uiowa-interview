import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRequestsPageComponent } from './add-requests-page.component';

describe('AddRequestsPageComponent', () => {
  let component: AddRequestsPageComponent;
  let fixture: ComponentFixture<AddRequestsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRequestsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRequestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
