export type Recipe = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  time: string;
  servings: number;
  ingredients: string[];
  steps: string[];
};
