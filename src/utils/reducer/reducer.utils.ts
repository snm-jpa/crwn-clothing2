import { AnyAction } from "redux";

/*

//intersection type eg.
type Human = {
    name: string;
}

type Alien = {
    fly: () => void;
}

type Hybrid = Human & Alien;

const Josh: Hybrid = {
    name: 'josh',
    fly: () => { }
}

//Return type Eg.

type MyFunc1 = () => string;
type MyFunc2 = () => Human;

type MyReturn1 = ReturnType<MyFunc1>      //MyReturn1 return type is string
type MyReturn2 = ReturnType<MyFunc2>      //MyReturn2 return type is Human

*/


type Matchable<AC extends () => AnyAction> = AC & {
    type: ReturnType<AC>['type'];
    match(action: AnyAction): action is ReturnType<AC>;
}

export function withMatcher<AC extends () => AnyAction & { type: string }>(actionCreator: AC): Matchable<AC>;

export function withMatcher<AC extends (...args: any[]) => AnyAction & { type: string }>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
    const type = actionCreator().type;
    return Object.assign(actionCreator, {
        type,
        match(action: AnyAction) {
            return action.type === type;
        }
    })
}

export type ActionWithPayLoad<T, P> = {
    type: T;
    payload: P;
};

export type Action<T> = {
    type: T;
};

//Function Overloading

export function createAction<T extends string, P>(
    type: T, payload: P
): ActionWithPayLoad<T, P>;

export function createAction<T extends string>(
    type: T, payload: void
): Action<T>;

//Function Implementation
export function createAction<T extends string, P>(type: T, payload: P) {
    return { type, payload }
}


//export const createAction = (type, payload) => ({ type, payload });
