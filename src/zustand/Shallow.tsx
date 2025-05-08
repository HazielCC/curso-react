export function Shallow()<T extends object>(state: T, equalityFn: (a: T, b: T) => boolean): T {
    const shallowEqual = (objA: T, objB: T) => {
        if (objA === objB) return true;
        if (Object.keys(objA).length !== Object.keys(objB).length) return false;
        for (const key in objA) {
            if (objA[key] !== objB[key]) return false;
        }
        return true;
    };
    return equalityFn(state, shallowEqual) ? state : state;
}
