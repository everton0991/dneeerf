import { SidebarComponent } from './core/menu/sidebar/sidebar.component';
import { LoginComponent } from '@app/login/login.component';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LoaderComponent } from '@app/shared/loader/loader.component';
import { ToolbarComponent } from '@app/core/header/toolbar/toolbar.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoaderComponent,
        LoginComponent,
        ToolbarComponent,
        SidebarComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Teste'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
