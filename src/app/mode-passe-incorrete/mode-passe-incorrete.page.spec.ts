import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModePasseIncorretePage } from './mode-passe-incorrete.page';

describe('ModePasseIncorretePage', () => {
  let component: ModePasseIncorretePage;
  let fixture: ComponentFixture<ModePasseIncorretePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModePasseIncorretePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModePasseIncorretePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
