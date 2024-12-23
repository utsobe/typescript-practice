// destucturing

const user = {
    id: 345,
    name: {
        firstName: 'Mezbaul',
        middleName: 'Mizan',
        lastName: 'Abedin'
    }, 
    contactNo: "01712345678",
    address: "Uganda"
}

const {
    contactNo, 
    name: {middleName: midName,},
    address: myAddress
} = user;

console.log(myAddress);

// array destructuring

const myFriends = ['rachel', 'monica', 'phoebe', 'joey', 'chandler', 'ross'];

const [, , bestFriend, ...rest] = myFriends;

 