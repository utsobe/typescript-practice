{
    // spread operator
    // rest operator
    // destructuring



    // learn spread operator 
    const bros1: string[] = ['rachel', 'monica', 'phoebe'];
    const bros2: string[] = ['joey', 'chandler', 'ross'];

    bros1.push(...bros2); // using spread operators

    const mentors1 = {
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    }

    const mentors2 = {
        react: 'Firoz',
        angular: 'Tanmoy',
        dbms: 'Nahid'
    }

    const mentorList = {
        ...mentors1, ...mentors2
    }


    // learn rest opea rator
    const greetFriends = (...friends: string[]) => {
        // console.log(`Hi ${friend1}, ${friend2}, ${friend3}`);
         friends.forEach((friend: string) => console.log(`Hi ${friend}`));
    }

    greetFriends('rachel', 'monica', 'phoebe', 'joey', 'chandler', 'ross');
}