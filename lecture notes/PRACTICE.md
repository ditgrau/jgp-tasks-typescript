1. PROMPT

const airplane = {
    model: 'Airbus',
    flightNumber: 'A2201',
    timeDeparture: new Date(),
    timeArrival: new Date(),
    caterer: {
        name: 'Special Food',
        address: 'Some Street, New York',
        phone: 456879098,
    },
};

- ANSWER

type Caterer = {
    name: string;
    address: string;
    phone: number;      
}

type Airplane = {
    model: string;
    flightNumber: string;
    timeDeparture: Date;
    timeArrival: Date;
    caterer: Caterer;
}

const condor: Airplane = {
    model: 'Airbus',
    flightNumber: 'A98789',
    timeDeparture: new Date(),
    timeArrival: new Date(),
    caterer: {
        name: 'Special Food',
        address: 'Some Street, New York',
        phone: 456879098,
    },
};