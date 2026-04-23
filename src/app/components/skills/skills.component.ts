import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ ADD THIS

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
skills = [
  'AWS (EC2, S3, EKS, Lambda)',
  'Terraform & CloudFormation',
  'Docker & Kubernetes',
  'Jenkins & CI/CD',
  'GitHub Actions',
  'Prometheus & Grafana',
  'Python & Bash'
];
}
