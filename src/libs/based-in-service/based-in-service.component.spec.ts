import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasedInServiceComponent } from './based-in-service.component';

describe('BasedInServiceComponent', () => {
  let component: BasedInServiceComponent;
  let fixture: ComponentFixture<BasedInServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BasedInServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasedInServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
