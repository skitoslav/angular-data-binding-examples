import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasedInComponentComponent } from './based-in-component.component';

describe('BasedInComponentComponent', () => {
  let component: BasedInComponentComponent;
  let fixture: ComponentFixture<BasedInComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [BasedInComponentComponent]
      })
      .compileComponents();

    fixture = TestBed.createComponent(BasedInComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
