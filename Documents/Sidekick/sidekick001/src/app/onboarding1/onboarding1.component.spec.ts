import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Onboarding1Component } from './onboarding1.component';

describe('Onboarding1Component', () => {
  let component: Onboarding1Component;
  let fixture: ComponentFixture<Onboarding1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Onboarding1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Onboarding1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
