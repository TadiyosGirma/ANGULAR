export class Recipe{
  public name: string;
  public ingredients: Array<string>;
  public description: string;
  public imagePath: string;

  public constructor(name: string, ingredients: Array<string>,  description: string, imagePath: string){

    this.name = name;
    this.ingredients = ingredients;
    this.description = description;
    this.imagePath = imagePath;
  }
}
