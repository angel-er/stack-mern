import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    }
  },
  inputField: {
    '& label.Mui-focused': {
      color: '#26a69a'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#26a69a'
    }
  },
  contenedorPresentacion: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    '& .makeStyles-root-1 .MuiTextField-root': {
      justifyContent: 'space-between',
      width: '90%'
    }
    // alignItems: 'center'
  },
  cuadroLogin: {
    width: '42%',
    marginTop: '20px',
    backgroundColor: 'white',
    padding: '15px 25px 25px 25px',
    '-webkit-box-shadow': '4px 1px 20px -4px rgba(0, 0, 0, 0.35)',
    '-moz-box-shadow': '4px 1px 20px -4px rgba(0, 0, 0, 0.35)',
    boxShadow: '4px 1px 20px -4px rgba(0, 0, 0, 0.35)'
  },
  arrowSend: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 40
  },
  btnEnviarLogin: {
    backgroundColor: '#26a69a',
    '&:hover': {
      backgroundColor: '#2bbbad'
    }
  },
  recuperarPass: {
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 5
  },
  btnRegistro: {
    marginLeft: 100,
    color: '#317f91',
    borderColor: '#317f91',
    '&:hover': {
      color: 'white',
      backgroundColor: '#26a69a',
      borderColor: '#317f91'
    }
  }
}));
