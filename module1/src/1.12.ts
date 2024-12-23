{
    // nullable types 

    const searchName = (value: string | null)=> {
        if (value) {
            console.log('Searching...');
        } else {
            console.log('There is nothing to search');
        }
    }

    searchName(null);

    // unknown types

    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
       else if ( typeof value === 'string') {
            const [result, unit] = value.split(' ');
            console.log(result);
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else {
            console.log('wrong input');
        }
    }

    getSpeedInMeterPerSecond(null);


    // never type

    const throwError = (message: string): never => {
        throw new Error(message);
    }

    throwError('Something went wrong');
    console.log('Hello');

    

}