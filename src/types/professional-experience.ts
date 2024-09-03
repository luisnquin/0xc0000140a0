interface DetailedTechnology {
  name: string;
  link: string;
}

export class Description {
  public achievements: string[];
  public technologies: DetailedTechnology[];

  constructor(inputs: {
    technologies?: DetailedTechnology[];
    achievements?: string[];
  }) {
    this.technologies = inputs.technologies || [];
    this.achievements = inputs.achievements || [];
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
