import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetteDetailPage } from './recette-detail.page';

describe('RecetteDetailPage', () => {
  let component: RecetteDetailPage;
  let fixture: ComponentFixture<RecetteDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
