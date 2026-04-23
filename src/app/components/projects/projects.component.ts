import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ IMPORTANT

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
projects = [
  {
    title: 'Cloud-Native App Deployment',
    tech: 'AWS, Kubernetes, Docker, Jenkins',
    description: 'Deployed scalable microservices on EKS with CI/CD'
  },
  {
    title: 'CRM Platform',
    tech: 'AWS, Docker, Kubernetes',
    description: 'Microservices-based CRM with 99.9% uptime'
  }
];
}
