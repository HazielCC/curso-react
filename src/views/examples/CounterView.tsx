import {Box, Button, Typography} from "@mui/material";
import {UseCounterStore} from "../../stores/examples/UseCounterStore";

export const CounterView = () => {
    // This is a simple counter-example
    const {count, incrementCount, decrementCount, resetList} = UseCounterStore();

    function handleIncrement(): void {
        incrementCount()
    }

    const handleReset = () => {
        resetList()
    };

    const handleDecrement = () => {
        decrementCount()
    };

    return (
        <Box>
            <Typography variant={"h1"}>Counter</Typography>
            <Typography>Counter example</Typography>
            <Typography>Click the button to increment the counter.</Typography>
            <Button onClick={handleIncrement}>Increment</Button>
            <Typography>
                Click the button to decrement the counter.
            </Typography>
            <Button onClick={handleDecrement}>Decrement</Button>
            <Typography>Click the button to reset the counter.</Typography>
            <Button onClick={handleReset}>Reset</Button>
            <Typography>
                Counter: {count}
            </Typography>
        </Box>
    );
};