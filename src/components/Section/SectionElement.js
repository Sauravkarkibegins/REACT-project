import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  box: {
    overflow: 'hidden',
    paddingTop: '15vh',
    marginBottom: '20vh',
  },
  maincontainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h5: {
    color: 'green',
    letterSpacing: '.6rem',
  },
  btn: {
    fontSize: '15px',
    letterSpacing: '.5rem',
    border: '1px solid transparent',

    '&:hover': {
      color: 'green',
      border: '1px solid green',
      background: '#fff',
    },
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default useStyles;
