import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from "@angular/core/testing";
import { User } from "../user";
import { LoginComponent } from "./login.component"
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('Login Component',()=>{
  let com:LoginComponent;
  let userMock:User;
  // a wrapper for component with generic type "loginComponent"
  let fixture: ComponentFixture<LoginComponent>;
  // elements that we want to debbug
  let submitElm :DebugElement;
  let emailElm :DebugElement;
  let passwordElm :DebugElement;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      //auto DOM change detections
      providers:[{provide:ComponentFixtureAutoDetect,useValue:true}]
    })
    userMock = {email:"test@test.com",password:'1234567'};
    fixture = TestBed.createComponent(LoginComponent);
    //instance of the fixture
    com= fixture.componentInstance;
    //access elements with #debugElement
    //catch element with #query() of the #debugElement
    //catching element method by type useing #By.css()
    submitElm =fixture.debugElement.query(By.css('button'));
    emailElm =fixture.debugElement.query(By.css('input[type=email]'));
    passwordElm =fixture.debugElement.query(By.css('input[type=password]'));
  });
  it('#login() should toggle isLoggedIn',()=>{
    expect(com.isLoggedIn).toBe(false,'false at first');
    com.login(userMock.email,userMock.password);
    expect(com.isLoggedIn).toBe(true,'true after click login');
    com.login(userMock.email,userMock.password);
    expect(com.isLoggedIn).toBe(false,'false after second click');
  });
  it('#login() should toggle loginState() message',()=>{
    expect(com.loginState).toMatch(/out/);
    com.login(userMock.email,userMock.password);
    expect(com.loginState).toMatch(/in/);
  })
  it('Setting isLoggedIn to true must disable submit button',()=>{
    com.isLoggedIn = true;
    //making the DOM detect changes as user is making changes manually
    fixture.detectChanges();
    //testing if buttom is disable via nativeElement proprety
    expect(submitElm.nativeElement.disabled).toBeTruthy();
    com.isLoggedIn = false;
    fixture.detectChanges();
  })
  //test the output
  it('SubmitData must emit email and password correctly',()=>{
    let user!:User;
    //accessing element value via nativeElement proprety
    emailElm.nativeElement.value = userMock.email;
    passwordElm.nativeElement.value = userMock.password;
    //subscribe to intercept data 
    com.submitData.subscribe((data:User)=>(user = data));
    //trigger the event click of buttom
    submitElm.triggerEventHandler('click',null);
    expect(user.email).toBe(userMock.email);
    expect(user.password).toBe(userMock.password);
  })
  it('Testing on binding',()=>{
    //catch <h1> element
   //fixture.detectChanges(); //use this line if it is not automatic detection
    const h1:HTMLElement = fixture.nativeElement.querySelector('h1');
    console.log("my h1 ==>",h1);
    expect(h1.textContent).toContain(com.title);
  })
})