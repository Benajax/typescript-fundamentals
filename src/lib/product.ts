import { Product } from './interfaces';

// This will act as the foundation for other Product type classes (FoodProduct, SportingProduct)
abstract class ProductBase implements Product {

  // BO: make constructor properties public to auto implement properties
  //     Can you see that the mandatory properties of the interface are implemented
  //     in the in the constructor?
  constructor(public id: number, public name: string, public icon: string) {}

  validate(): boolean {
    throw new Error('Not implemented');
  }
}

export class FoodProduct extends ProductBase {
  // BO: notice that the validate function does not have function keyword. In a class, that can be left out.
  //     Also notice the double !! <-- nice way of saying that thos items have a value i.e is not null synthax
  functionvalidate(): boolean {
    return !!this.id && !!this.name && !!this.icon;
  }

  // BO: if this class had a constructor like below then it must have a super call i.e call the base constructor.
  //     NB: commented code is not part of the course
  /*
     constructor(id: number, name: string, icon: string) {
       super(id, name, icon);
     }
  */

}
