import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ItemServiceService } from './item-service.service';

describe('ItemServiceService', () => {
  let service: ItemServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({      
      declarations: [],
      imports: [
        HttpClientTestingModule
      ],
      providers: []
    });
    service = TestBed.inject(ItemServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
