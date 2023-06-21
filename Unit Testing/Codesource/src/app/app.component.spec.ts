//import testBed
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';

// testBed
describe('App component',()=>{
  let component: AppComponent;
  //a fixute is a wrapper (emballage) for a component and its template
  let fixture:ComponentFixture<AppComponent>; 
  let authService: AuthService;
  beforeEach(function(){
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
    })
   // create component and test fixture
    fixture = TestBed.createComponent(AppComponent);
    // get test component from the fixture
    component = fixture.componentInstance;
    // the service provided to the TestBed
    authService = TestBed.inject(AuthService);
  });
  it('should should create app component',()=>{
    expect(component).toBeTruthy();
  });
  it('should have title ng unit testing',()=>{
    expect(component.title).toEqual('ngUnitTest')
  })
  it('can login',()=>{
    expect(component.canLogin('my uuser',123)).toBeTruthy();
    expect(component.canLogin('',123)).toBeFalsy();
  })
})


/* before injecting auth service*/
/*
describe('clicking in hellow funtion',()=>{  // (1) describe of the scenario
  it('must return Hello World!',()=>{    // (2) describe the behavior
    const com = new AppComponent(); 
    expect(com.hello()) // (3) the methode to be tested
    .toBe('Hello World!');  // (3) expect the return of the method
  })
})

/*
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngUnitTest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ngUnitTest');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ngUnitTest app is running!');
  });
});
*/