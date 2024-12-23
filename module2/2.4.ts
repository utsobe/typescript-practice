{
    // interface
    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        },
        smartWatch: T;
        bike?: X;
    }

    type AppleWatch  = {
        brand: string;
        model: string;
        display: string
    }


    const poorDeveloper: Developer<AppleWatch> = {
        name: 'Mezbaul',
        computer: {
            brand: 'Dell',
            model: 'XPS',
            releaseYear: 2020
        },
        smartWatch: {
            brand: 'Apple',
            model: 'Watch',
            display: 'OLED'
        }
    }

    interface SmartWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean
    }
    
    interface Bike {
        model: string;
        engineCapacity: number;
    }

    const richDeveloper: Developer<SmartWatch, Bike> = {
        name: 'Alom',
        computer: {
            brand: 'HP',
            model: 'XPS',
            releaseYear: 2020
        },
        smartWatch: {
            brand: 'Apple',
            model: 'Watch',
            heartTrack: true,
            sleepTrack: true,
        },
        bike: {
            model: 'CBR',
            engineCapacity: 100
        }
    }
}