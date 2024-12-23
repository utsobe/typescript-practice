{
    // constrainsts

    const addCourseToStudent = <T extends {
        id: number;
        name: string;
        email: string;
    }>(student: T)=> {
        const course = 'Next Level Web Development';

        return {...student, course};
    }

    const student3 = addCourseToStudent({id: 444, name: "Mr. Z", email: 'tst@gmail.com', emni: 'emni'});
    
    
    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({
        id: 222,
        name: 'Mezbaul',
        email: 'Wxj5y@example.com',
        devType: 'NLWD',
    });

    const student2 = addCourseToStudent({
        id: 333,
        name: 'Mezbaul',
        email: 'Wxj5y@example.com',
        hasWatch: 'APPLE',
    });

}