{
    // generic typex

    type GenericArray<T> = Array<T>;

    // const rollNumbers: number[] = [1,2,3];
    const rollNumbers: GenericArray<number> = [1,2,3];

    // const mentors: string[] = ['Mr. X', 'Mr. Y', 'Mr. Z'];
    const mentors: GenericArray<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];

    // const boolArray : boolean[] = [true, false, true];
    const boolArray : GenericArray<boolean> = [true, false, true];

    const add = (x : number, y : number) => x + y;


    interface User {
        name: string;
        age: number;
    }

    const user: GenericArray<User> = [
        {
            name: 'Mezbaul',
            age: 20
        },
        {
            name: 'Jhankar Mahbub',
            age: 110
        },
    ]

    // generic array'

    type GenericTuple<X, Y> = [X, Y];
    
    const  manush: GenericTuple<string, string> = ['Mr. X', 'Mr. Z'];

    const UserWithID: GenericTuple<number, {name: string, email: string}> = [123,{name: 'persian', email: 'test@gmailcom'}]
}