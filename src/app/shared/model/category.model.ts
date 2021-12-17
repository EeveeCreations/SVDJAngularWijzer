export class Category {
  categoryID: bigint;
  name: string;
  description: string;

  constructor(categoryID: bigint, name: string, description: string) {
    this.categoryID = categoryID;
    this.name = name;
    this.description = description;
  }
}
