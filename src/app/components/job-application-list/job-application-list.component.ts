import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { JobApplicationService } from 'src/app/service/job-application-service';

@Component({
  selector: 'app-job-application-list',
  templateUrl: './job-application-list.component.html',
  styleUrls: ['./job-application-list.component.css'],
})
export class JobApplicationListComponent implements OnInit {
  jobApplications: any[] = [];
  displayedColumns: string[] = ['companyName', 'jobTitle', 'location'];

  constructor(private jobApplicationService: JobApplicationService) {}

  ngOnInit(): void {
    this.loadJobApplications();
  }

  loadJobApplications() {
    this.jobApplicationService
      .getJobApplications()
      .subscribe((applications) => {
        this.jobApplications = applications;
      });
  }
}
