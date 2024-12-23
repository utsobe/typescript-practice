{
    // functions with generics

    const createArray = (param: string): string[] => {
        return [param];
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    }

    type User = {id: number, name: string};

    const res1 = createArray('hello');
    const resGeneric = createArrayWithGeneric<string>('hello');
    const resGenericObject = createArrayWithGeneric<User>({id: 222,name: 'persian'});






    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T,Q] => {
        return [param1, param2];
    }

    const res10 = createArrayWithTuple<string, number>('hello', 222);
    const res11 = createArrayWithTuple<string,{name: string}>('hello',{name: 'persian'});


    const addCourseToStudent = <T>(student: T)=> {
        const course = 'Next Level Web Development';

        return {...student, course};
    }
    
    const student1 = addCourseToStudent({
        name: 'Mezbaul',
        email: 'Wxj5y@example.com',
        devType: 'NLWD',
    });

    const student2 = addCourseToStudent({
        name: 'Mezbaul',
        email: 'Wxj5y@example.com',
        hasWatch: 'APPLE',
    });
}