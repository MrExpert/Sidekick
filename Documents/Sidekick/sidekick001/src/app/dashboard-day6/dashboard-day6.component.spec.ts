import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardDay6Component } from './dashboard-day6.component';

describe('DashboardDay6Component', () => {
  let component: DashboardDay6Component;
  let fixture: ComponentFixture<DashboardDay6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDay6Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardDay6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
