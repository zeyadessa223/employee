import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorDataComponent } from './creator-data.component';

describe('CreatorDataComponent', () => {
  let component: CreatorDataComponent;
  let fixture: ComponentFixture<CreatorDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatorDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
