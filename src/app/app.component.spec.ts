import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {CapitalizePipe} from "./capitalize.pipe";
import {By} from "@angular/platform-browser";

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CapitalizePipe,
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Bookstore by Hackages');
  }));

  it('should display the mockMovies', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.item').textContent).toContain('Angular up')
    expect(compiled.querySelector('.item:last-of-type').textContent).toContain('Functional programming with F#')
    expect(compiled.querySelector('h3').textContent).toContain('We have 13 book(s) in our library')

  })

  describe('search input', () => {
    it('should search on the books when input given', () => {
      fixture.detectChanges();
      app.searchInput.nativeElement.value = 'Efficient';
      app.searchInput.nativeElement.dispatchEvent(new Event('input'));

      const compiled = fixture.debugElement.nativeElement;

      fixture.detectChanges();

      expect(compiled.querySelector('.item').textContent).toContain('Efficient JavaScript')
      expect(compiled.querySelector('h3').textContent).toContain('We have 1 book(s) in our library')
    })

    it('should reset when clicking on the reset button', () => {
      fixture.detectChanges();
      app.searchInput.nativeElement.value = 'Efficient';
      app.searchInput.nativeElement.dispatchEvent(new Event('input'));

      const compiled = fixture.debugElement.nativeElement;

      fixture.detectChanges();

      compiled.querySelector('.reset').click();

      fixture.detectChanges();

      expect(app.searchInput.nativeElement.value).toEqual('');
      expect(compiled.querySelector('.item').textContent).toContain('Angular up')
      expect(compiled.querySelector('.item:last-of-type').textContent).toContain('Functional programming with F#')
      expect(compiled.querySelector('h3').textContent).toContain('We have 13 book(s) in our library')
    })
  });

  describe('Category select', () => {
    it('should filter and have class selected when clicking on category', () => {
      fixture.detectChanges();
      const button = fixture.debugElement.query(
        debugEl => debugEl.name === 'button' && debugEl.nativeElement.textContent === 'Mobile'
      );

      button.nativeElement.click();
      const compiled = fixture.debugElement.nativeElement;

      fixture.detectChanges();
      expect(compiled.querySelector('.item').textContent).toContain('NativeScript in Action')
      expect(compiled.querySelector('.item:last-of-type').textContent).toContain('Learning React Native')
      expect(compiled.querySelector('h3').textContent).toContain('We have 2 book(s) in our library')
    })

    it('should work in conjuction with the search', () => {
      fixture.detectChanges();
      const button = fixture.debugElement.query(
        debugEl => debugEl.name === 'button' && debugEl.nativeElement.textContent === 'Web'
      );

      app.searchInput.nativeElement.value = 'Javascript';
      app.searchInput.nativeElement.dispatchEvent(new Event('input'));

      button.nativeElement.click();
      const compiled = fixture.debugElement.nativeElement;

      fixture.detectChanges();
      expect(compiled.querySelector('.item').textContent).toContain('Efficient JavaScript')
      expect(compiled.querySelector('.item:last-of-type').textContent).toContain('Building Web JavaScript Applications')
      expect(compiled.querySelector('h3').textContent).toContain('We have 3 book(s) in our library')
    })
  })

});
