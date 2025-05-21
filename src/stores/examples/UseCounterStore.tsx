import {create} from "zustand";
import {persist} from "zustand/middleware";

interface UseCounterStore {
    count: number;
    listCount: number[];
    incrementCount: () => void;
    decrementCount: () => void;
    resetList: () => void;
}

export const UseCounterStore = create<UseCounterStore>()(
    persist(
        (set) => ({
            count: 0,
            decrementCount: () => {
                set((state) => {
                    const newCount = state.count - 1; // Decrement the count
                    const newListCount = [...state.listCount, newCount]; // Add the new count to the list
                    return {count: newCount, listCount: newListCount}; // Update the state with the new count and list
                })
            },
            incrementCount: () => {
                set((state) => {
                    const newCount = state.count + 1; // Increment the count
                    const newListCount = [...state.listCount, newCount]; // Add the new count to the list
                    return {count: newCount, listCount: newListCount}; // Update the state with the new count and list

                });
            },
            listCount: [],
            resetList: () => {
                set(() => ({
                    count: 0, // Reset the list to an empty array
                }));
            },
        }),
        {
            name: 'position-storage',
        }, // (optional) by default, 'localStorage' is used
    ),
);