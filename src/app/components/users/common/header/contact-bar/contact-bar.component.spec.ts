import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBarComponent } from './contact-bar.component';

describe('ContactBarComponent', () => {
  let component: ContactBarComponent;
  let fixture: ComponentFixture<ContactBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactBarComponent]
    });
    fixture = TestBed.createComponent(ContactBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
