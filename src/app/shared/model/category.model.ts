export class Category {
  categoryId: bigint;
  name: string;
  description: string;

  constructor(categoryId: bigint, name: string, description: string) {
    this.categoryId = categoryId;
    this.name = name;
    this.description = description;
  }
}
