import Snackbar, {SnackbarCloseReason} from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {SyntheticEvent} from "react";

interface SnackBarProps {
    open: boolean;
    onClose: (event?: SyntheticEvent | Event, reason?: SnackbarCloseReason) => void;
    severity: 'success' | 'error' | 'warning' | 'info';
    message: string;
    autoHideDuration?: number;
}

export const SnackBar = ({
                             open,
                             onClose,
                             severity = "success",
                             message,
                             autoHideDuration = 4000,
                         }: SnackBarProps) => {

    return (
        <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={onClose}>
            <Alert
                onClose={onClose}
                severity={severity}
                variant="filled"
                sx={{
                    width: '100%',
                    maxWidth: 600,
                    margin: "0 auto",
                    position: "fixed",
                    bottom: 20,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 1000,
                    '& .MuiAlert-icon': {
                        fontSize: '1.5rem',
                    },
                    '& .MuiAlert-message': {
                        fontSize: '1rem',
                    },
                }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};