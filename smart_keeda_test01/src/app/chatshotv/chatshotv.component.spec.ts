import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatshotvComponent } from './chatshotv.component';

describe('ChatshotvComponent', () => {
  let component: ChatshotvComponent;
  let fixture: ComponentFixture<ChatshotvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatshotvComponent]
    });
    fixture = TestBed.createComponent(ChatshotvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
