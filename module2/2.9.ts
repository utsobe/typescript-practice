{
    // Conditional type
    // T extends U ? X : Y

    type a1 = number;
    type b1 = string;

    type x = a1 extends null ? true : false; // condition false
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any; // true

    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
    }

    // Car ase kina / bike ase kina / ship ase kina / tractor ase kina
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

    type HasBike = CheckVehicle<'plane'>; // true


}