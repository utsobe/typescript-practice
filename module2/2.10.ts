{
    // mapped types

    const arrOfNumbers: number[] = [1,2,3,4,5,6,7,8,9,10];
    // const arrOfStrings: string[] = ['1','2','3','4','5','6','7','8','9','10'];

    const arrOfStrings: string[] = arrOfNumbers.map(number => number.toString());

    console.log(arrOfStrings);

    type Area = {
        height: number;
        width: number;
    }

    type Height = Area['height']; // number // lookup type

    // type AreaString = {
    //     height: string;
    //     width: string;
    // }

    // keyof operator

    type AreaString<T> = {
        [K in keyof T]: T[K];
    }

    const area1: AreaString<{height: boolean, width: string}> = {
        height: true,
        width: '20',
    }

}