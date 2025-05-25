import { TestBed } from '@angular/core/testing';

import { DownloadExcelService } from './download-excel.service';

describe('DownloadExcelService', () => {
  let service: DownloadExcelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadExcelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
