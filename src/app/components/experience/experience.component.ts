import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'LTM Pvt Ltd',
    duration: '2024 - Present',
    highlights: [
      'Reduced deployment time by 60%',
      'Improved uptime to 99.9%',
      'Automated infrastructure'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Orektic Solutions',
    duration: '2022 - 2024',
    highlights: [
      'Reduced release time by 40%',
      'Improved performance by 25%'
    ]
  }
];
}
