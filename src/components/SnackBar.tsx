import Snackbar, {SnackbarCloseReason} from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {SyntheticEvent} from "react";

interface SnackBarProps {
    open: boolean;
    onClose: (event?: SyntheticEvent | Event, reason?: SnackbarCloseReason) => void;
    severity: 'success' | 'error' | 'warning' | 'info';
    message: string;
    autoHideDuration?: number;
    vertical?: 'top' | 'bottom';
    horizontal?: 'left' | 'center' | 'right';
}

export const SnackBar = ({
                             open,
                             onClose,
                             severity = "success",
                             message,
                             autoHideDuration = 4000,
                             vertical = "top",
                             horizontal = "center"
                         }: SnackBarProps) => {
    return (
        <Snackbar
            anchorOrigin={{vertical, horizontal}}
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={onClose}
        >
            <Alert
                onClose={onClose}
                severity={severity}
                variant="filled"
                sx={{width: '100%'}}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};
