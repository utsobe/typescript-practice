{
    // Interface
    type User1 = {
        name: string;
        age: number;
    }

    interface User2 {
        name: string;
        age: number;
    }

    type UserWithRole1 = User1 & {
        role: string;
    }
 
    interface UserWithRole2 extends User1 {
        role: string;
    }

    type rollNumber = number;


    const user1: UserWithRole2 = {
        name: 'Mezbaul',
        age: 20,
        role: 'manager'
    }   

    // js --> object, array --> oject function --> object

    type Roll1 = number[];

    interface Roll2 {
        [index: number]: number
    }

    const rollNumber: Roll2 = [1,2,3];

    type Add1 = (num1: number, num2: number) => number;

    interface Add2 {
        (num1: number, num2: number): number
    }

    const add: Add2 = (num1, num2) => num1 + num2;
     
}