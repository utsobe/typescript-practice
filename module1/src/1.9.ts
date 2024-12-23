{
    // Type Alias

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }

    const student1: Student = {
        name: 'Mezbaul',
        age: 20,
        gender: 'male',
        contactNo: '01712345678',
        address: 'Uganda'
    }

    const student2: Student = {
        name: 'Mezbaul',
        age: 20,
        gender: 'male',
        address: 'Uganda'
    }  

    const student3: Student = {
        name: 'Mezbaul',
        age: 20,
        gender: 'male',
        address: 'Uganda'
    }  

    type UserName = string
    type IsAdmin = boolean
    const userName: UserName = 'Mezbaul';
    const isAdmin: IsAdmin = true;

    type Add = (num1: number, num2: number) => number;


    const add: Add = (num1, num2) => num1 + num2;
    
}