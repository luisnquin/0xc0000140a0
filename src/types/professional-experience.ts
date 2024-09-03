export class Description {
  public achievements: string[];

  constructor(inputs: { achievements: string[] }) {
    this.achievements = inputs.achievements;
  }
}

export interface IProfessionalExperience {
  company: string;
  position: string;
  location: string;
  mode: string;
  since: string;
  until: string;
  description: string | Description;
}
