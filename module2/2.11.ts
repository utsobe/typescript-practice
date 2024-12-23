{
    // utility types
    // Pick

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string
    }

    type NameAge = Pick<Person, 'name' | 'age'>;

    // Omit
    type contactInfo = Omit<Person, 'name' | 'age'>;

    // Requried
    type PersonRequired = Required<Person>;

    // Partial
    type PersonPartial = Partial<Person>;

    // Readonly
    type PersonReadonly = Readonly<Person>;

    const person1 : PersonReadonly = {
        name: 'Mezbaul',
        age: 20,
        contactNo: '01700000000'
    }

    // person1.name = 'Mr. X';

    // Record
    // type MyObj = {
    //     a: string;
    //     b: string;
    // }

    type MyObj = Record<string, string>;

    const EmptyObj: Record<string, unknown> = {};

    const obj1 = {
        a: 'a',
        b: 'b',
        c: 'c'
    }
}