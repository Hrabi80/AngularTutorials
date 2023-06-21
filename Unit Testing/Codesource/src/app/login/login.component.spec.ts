import { LoginComponent } from "./login.component"

describe('Login Component',()=>{
  let com:LoginComponent;
  beforeEach(()=>{
    com = new LoginComponent();
  });
  it('#login() should toggle isLoggedIn',()=>{
    expect(com.isLoggedIn).toBe(false,'false at first');
    com.login();
    expect(com.isLoggedIn).toBe(true,'true after click login');
    com.login();
    expect(com.isLoggedIn).toBe(false,'false after second click');
  });
  it('#login() should toggle loginState() message',()=>{
    expect(com.loginState).toMatch(/out/);
    com.login();
    expect(com.loginState).toMatch(/in/);
  })
})