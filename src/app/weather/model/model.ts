export interface WeatherResponse {
    weather:    Weather[];
    main:       Main;
    visibility?: number;
    wind:       Wind;
    clouds?:     Clouds;
    dt?:         number;
    sys?:        Sys;
    timezone?:   number;
    id?:         number;
    name:       string;
    cod?:        number;
}

export interface Clouds {
    all?: number;
}

export interface Main {
    temp: number;
}

export interface Sys {
    type?:    number;
    id?:      number;
    country?: string;
    sunrise?: number;
    sunset?:  number;
}

export interface Weather {
    id:          number;
    main?:        string;
    description?: string;
    icon:        string;
}

export interface Wind {
    speed: number;
    deg?:   number;
    gust?:  number;
}
