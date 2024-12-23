{
    // generic constraints with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner= 'bike' | 'car' | 'ship'; // manually''


    type Owner2= keyof Vehicle;

    const person1: Owner = 'bike';

    function getPropertyValue<X, Y extends keyof X>(obj: X, key: Y): X[Y] {
        return obj[key];

    }

      const user = {
         name: 'Mr. Persian',
         age: 26,
         address: 'Ctg',
    }

    const car = {
        model: 'BMW',
        year: 2020,
    }

    const result1 = getPropertyValue(car, 'year'); // car ['model']

  

    // user ['name']
}