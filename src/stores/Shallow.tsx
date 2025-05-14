// export function Shallow<T extends object>(objA: T, objB: T): boolean {
//     if (objA === objB) return true;
//     if (Object.keys(objA).length !== Object.keys(objB).length) return false;
//     for (const key in objA) {
//         if (objA[key] !== objB[key]) return false;
//     }
//     return true;
// }
