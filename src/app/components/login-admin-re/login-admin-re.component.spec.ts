import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdminReComponent } from './login-admin-re.component';

describe('LoginAdminReComponent', () => {
  let component: LoginAdminReComponent;
  let fixture: ComponentFixture<LoginAdminReComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAdminReComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAdminReComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
