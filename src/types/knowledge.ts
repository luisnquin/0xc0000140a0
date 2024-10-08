interface IKnowledge {
  name: string;
  slug: string;
}

export interface IKnowledgeCategory {
  name: string;
  color: string;
  items: IKnowledge[];
}
