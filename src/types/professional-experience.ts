export class Description {
  public achievements: string[];
  public technologies: string[];
  public about: string;

  constructor(inputs: {
    achievements?: string[];
    technologies?: string[];
    about?: string;
  }) {
    this.technologies = inputs.technologies || [];
    this.achievements = inputs.achievements || [];
    this.about = inputs.about || "";
  }
}

export interface IProfessionalExperience {
  company: string;
  position: string;
  location: string;
  mode: string;
  since: string;
  until: string;
  description?: string | Description;
}
