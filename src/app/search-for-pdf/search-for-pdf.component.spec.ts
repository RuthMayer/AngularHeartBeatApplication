import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForPdfComponent } from './search-for-pdf.component';

describe('SearchForPdfComponent', () => {
  let component: SearchForPdfComponent;
  let fixture: ComponentFixture<SearchForPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchForPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
