{
    // Learning function
    // Normal Function
    // Arrow Function

    function add(num1: number, num2: number = 2 ): number {
        return num1 + num2;
    }

    add(2, 2);

    const addArrow = (num1: number, num2: number): number => num1 + num2;


    // object --> function --> method

    const poorUser = {
        name: 'Mezbaul',
        balance: 0,
        // Method --> Function inside an object
        addBalance(balance: number): string {
            return `My new balance is: ${this.balance + balance}`;
        }
    }


    const arr: number[]= [1,4,10];

    const newArr: number[] = arr.map((elem: number): number => elem * elem)

    
}