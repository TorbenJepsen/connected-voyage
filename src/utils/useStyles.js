import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        marginTop: theme.spacing(2),
        minWidth: 430,
    },
    table: {
        minWidth: 700,
      },
}));