const add = (a: number, b: number) => {
    return a + b;
}

// type inference around only the return statement of a function as typpescript can read the body of the function
// should always use return type annotation as otherwise typescript wont spot errors in the function

function divide (a:number,b:number):number {
    return a/b;
}

const multiply = function(a: number, b: number):number {
    return a * b;
}

const logger = (message: string): void => {
    console.log(message);
}
// void is used when a function does not return anything.

const throwError = (message: string): never => {
    throw new Error(message);
}
// throwing errors- basically never reach the end of the function and its not returning anything so use never.

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

// es2015 syntax
const logWeather = ({date, weather}: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
}

logWeather(todaysWeather);