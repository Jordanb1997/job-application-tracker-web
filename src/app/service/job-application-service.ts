import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobApplicationService {
  constructor(private http: HttpClient) {}

  getJobApplications(): Observable<any[]> {
    return this.http.get<any[]>(`/jobApplications`);
  }
}
