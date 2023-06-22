import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
/*
describe('test on HighlightDirective', () => {
  let com: AppComponent;
  let fixture:ComponentFixture<AppComponent>;
  let titleElm: DebugElement;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      //use declaration as there is component depend on a directive so we need to mention them
      declarations:[HighlightDirective,AppComponent]
    })
    fixture= TestBed.createComponent(AppComponent);
    com = fixture.componentInstance;
    titleElm = fixture.debugElement.query(By.css('.my-title'))
  })
  it('on hover background must be yellow', () => {
    titleElm.triggerEventHandler('mouseover',null);
    fixture.detectChanges();
    expect(titleElm.nativeElement.style.backgroundColor).toBe('yellow');
  });
});
*/