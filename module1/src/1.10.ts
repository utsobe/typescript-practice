{
    // union types

    // type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper';
    // type FullStackDeveloper = 'frontendDeveloper' | 'expartDeveloper';

    // type Developer = FrontendDeveloper | FullStackDeveloper;

    // const newDeveloper: FrontendDeveloper = 'fakibazDeveloper';


    // type User = {
    //     name: string;
    //     email?: string;
    //     gender: 'male' | 'female';
    //     bloodGroup: 'A+' | 'B' | 'O+' | 'AB+';
    // }

    // const user1: User = {
    //     name: 'Mezbaul',
    //     gender: 'male',
    //     bloodGroup: 'A+'
    // }

    // intersection types

    type FrontendDeveloper = {
        skills: string[];
        designation1: 'Frontend Developer';
    }

    type BackendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer';
    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullStackDeveloper: FullStackDeveloper = {
        skills: ['html', 'css', 'js'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'
    }
}