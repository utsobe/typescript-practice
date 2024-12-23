{
    // Task 1:
    const message: string = 'Hello World, I will complete this course successfully and become a Next level Web Developer!';
    // console.log(message);   

    // Task 2:
    type User = (name: string, age: number, role: 'admin' | 'user'| 'guest') => {name: string, age: number, role: 'admin' | 'user'| 'guest'};


    const getUser: User = (name, age, role) => {
        return {name, age, role};
    }

    const user1 = getUser('Mezbaul', 25, 'guest');

    // console.log(user1);

    // Task 3:
    interface FamilyMember {
        name: string;
        relation: 'parent' | 'sibling' | 'spouse' | 'child' | 'other';
        age: number;
    }

    interface Job { 
        title: string;
        company: string;
        salary: number;
    };

    type Person = {
        name: string;
        address: string;
        hairColor: string;
        eyeColor: string;
        income: number;
        expenses: number;
        hobbies: string[];
        familyMembers: FamilyMember[];
        job: Job;
        skills: string[];
        married: 'single' | 'married' | 'divorced' | 'widowed';
        friends: string[];
    }

    const person1: Person = {   
        name: 'Mezbaul',
        address: 'Dhaka',
        hairColor: 'Black',
        eyeColor: 'Black',
        income: 100000,
        expenses: 50000,
        hobbies: ['Reading', 'Coding', 'Traveling'],
        familyMembers: [
            {name: 'Father', relation: 'parent', age: 60},
            {name: 'Mother', relation: 'parent', age: 55},
            {name: 'Sister', relation: 'sibling', age: 25},
        ],
        job: {title: 'Software Engineer', company: 'Google', salary: 100000},
        skills: ['JavaScript', 'TypeScript', 'React', 'NodeJS'],
        married: 'single',
        friends: ['Friend1', 'Friend2', 'Friend3'],
    }

    // console.log(person1);

    // Task 4:
    interface Book {
        title: string;
        writer: string;
        price: number;
        pages: number;
        genre: string;
        publisher: string;
        publishedYear: number;
        by: string;
    }

    interface Magazine {
        title: string;
        writer: string;
        price: number;
        pages: number;
        genre: string;
        publisher: string;
        publishedYear: number;
        about: string;
    }

    type ReadingMaterial = Book | Magazine;

    type ReadingMaterialType = Book & Magazine;

    const book1: ReadingMaterialType = {
        title: 'The Alchemist',
        writer: 'Paulo Coelho',
        price: 500,
        pages: 200,
        genre: 'Fiction',
        publisher: 'HarperCollins',
        publishedYear: 1988,
        by: 'Book',
        about: 'A novel about a young Andalusian shepherd named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried in the Pyramids.',
    }

    // TASK 5:
     type Reverse = (str: string) => string;

     const reverseString : Reverse = (str) => {
         return str.split('').reverse().join('');
     }

    const reversedString = reverseString('Hello');
    // console.log(reversedString);

    // TASK 6:
    type Sum = (...numbers : number[]) => number;

    const sumOfAll: Sum = (...numbers) => {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    }

    const sum = sumOfAll(1, 2, 3, 4, 5);    
    // console.log(sum);

    // TASK 7:
    const getResultByType = (value: string | number) => {
        if(typeof value === 'string'){
            return `The string length is: ${value.length}`;
        } else if(typeof value === 'number'){
            return `The square of the number is: ${value * value}`;
        }
    };

    const result1 = getResultByType('100');
    const result2 = getResultByType(100);

    // console.log(result2);

    // TASK 8:
    interface User1 {
        name: string;
        email: string;
    }

    interface Admin {
        adminLevel: string;
    }

    type AdminUser = User1 & Admin;

    const describeAdminUser = (user: AdminUser) => {
        return `The user ${user.name} is an admin with ${user.adminLevel} level and email ${user.email}`;
    }

    const adminUser1: AdminUser = {
        name: 'Mezbaul',
        email: 'test@gmail.com',
        adminLevel: 'Super',
    }

    const adminUserDescription = describeAdminUser(adminUser1);

    // console.log(adminUserDescription);

    // TASK 9:
    interface EmployeeAddress {
        city?: string;
        country: string;
    }

    interface Employee {
        name: string;
        age: number;
        designation: string;
        salary: number;
        address: EmployeeAddress;
    }

    const getEmployeeCity = (employee: Employee): string => {
        return `The employee's city is ${employee.address?.city ?? 'Unknown'}`;
    }

    const employee1: Employee = {
        name: 'Mezbaul',
        age: 25,
        designation: 'Software Engineer',
        salary: 100000,
        address: {
            country: 'Bangladesh',
        }
    }

    const employeeCity = getEmployeeCity(employee1);

    // console.log(employeeCity);

    // TASK 10:
    const getDisplayName = (name: string | null | undefined): string => `The name is ${name !== '' ? (name ?? 'Anonymous'): 'Anonymous'}`;

    const displayName1 = getDisplayName('Mezbaul');

    // console.log(displayName1);

    // TASK 11:
    const processData = (data: unknown): string => {
        if(typeof data === 'string'){
            return data?.toUpperCase();
        } else if(typeof data === 'number'){
            return `${data * data}`;
        } else {
            return 'Invalid data';
        }
    }

    const data1 = processData('Hello');
    const data2 = processData(100);
    const data3 = processData(true);

    // console.log(`data1: ${data1}, data2: ${data2}, data3: ${data3}`);

    // TASK 12:
    const handleError = (message: string): never => {
        
            throw new Error(message);
            
        
    }

    // const errorHandler =  handleError('An error occurred!');

    // console.log(errorHandler);

    // TASK 13:
    const removeDuplicates = <T>(data: T[]): T[] => {
        // return data.reduce((acc, curr) => { 
        //     if(acc.indexOf(curr) === -1){
        //         acc.push(curr);
        //     }
        //     return acc;
        // }, [] as T[]);
        return Array.from(new Set(data));
    }

    const array1 = removeDuplicates<number>([ 2, 3, 4, 5, 3, 5, 1,8,2, 9]);
    const array2 = removeDuplicates<string>(['Hasan', 'Mezbaul', 'Rifayet', 'Shahalam', 'Hakim', 'Mezbaul', 'Hakim', 'Mezbaul']);

    // console.log(array1, array2);

    // TASK 14:
    interface UserData {
        name: string;
        age: number;
    }

    const createPromise =  <T>(data: T): Promise<T> => {
        return new Promise<T>((resolve, reject) => {
            if(data){
                setTimeout(() => {
                    resolve(data);
                }, 1000);
            } else {
                setTimeout(() => {
                    reject('Failed to load data');
                }, 1000);
            }
        });
    }

    const getData = async (): Promise<UserData> => {
        const data = await createPromise<UserData>({name: 'Mezbaul', age: 25});
        return data;
    }

    // getData().then(data => console.log(data)).catch(error => console.error(error));


    // TASK 15:
    const isString = (value: unknown): value is string => {
        return typeof value === 'string';
    }

    const checkIfString = isString('Hello');

    // console.log(checkIfString);

    const printUpperCase = (value: unknown): void => {
       if(typeof value === 'string'){
           console.log(value.toUpperCase());
       } else {
              console.log('Invalid data');
       }
    }

    // printUpperCase('Hello');

    // TASK 16:
    interface Car {
        brand: string;
        model: string;
        year: number;
        price: number;
        color: string;
    }

    const car1: Car = {
        brand: 'Toyota',
        model: 'Corolla',
        year: 2021,
        price: 20000,
        color: 'White',
    }


    const getCarSingleInfo = <T extends Car, K extends keyof T>(car: T, key: K): T[K] =>  car[key];

    const carBrand = getCarSingleInfo(car1, 'brand');

    console.log(carBrand);   
    // console.log(car1['brand']);   

    

    




    





    



}