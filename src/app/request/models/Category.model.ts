export class Category {

  constructor(private categoryID: bigint, private name: string, private description: string) {
    this.categoryID = categoryID;
    this.name = name;
    this.description = description;
  }
}
