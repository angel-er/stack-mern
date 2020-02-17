import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
// import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {TextField, Grid, Button, Card} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import {useStyles} from './style.login.js';

const LoginComponent = ({handleChange, handleSubmit, username, password}) => {
  const classes = useStyles();

  const onChange = e => {
    handleChange(e);
  };

  return (
    <Fragment>
      <div className={classes.contenedorPresentacion}>
        <Card className={classes.cuadroLogin}>
          <form action='' className={classes.root} onSubmit={handleSubmit}>
            <Grid container spacing={1} justify='center'>
              <Grid item xs={12} sm={6}>
                <TextField
                  id='username-login'
                  label='Usuario'
                  type='text'
                  value={username}
                  onChange={onChange}
                  placeholder='Ingresar nombre de usuario'
                  className={classes.inputField}
                  fullWidth={true}
                  name='username'
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id='password-login'
                  label='Password'
                  type='password'
                  value={password}
                  onChange={onChange}
                  placeholder='Ingresar contraseña'
                  className={classes.inputField}
                  fullWidth={true}
                  name='password'
                  autoComplete='current-password'
                />
              </Grid>

              <Grid container spacing={1}>
                <Grid className={classes.arrowSend} item xs={12}>
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    // onClick={handleSubmit}
                    className={classes.btnEnviarLogin}
                    endIcon={<ArrowForwardIosIcon />}
                  >
                    <span>Ingresar</span>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <hr className='linea_divisoria' />
          </form>
          <Grid
            container
            spacing={1}
            justify='space-between'
            className={classes.recuperarPass}
          >
            <span style={{color: 'grey'}}>Recuperar contraseña</span>

            <Link
              to='/register'
              variant='outlined'
              color='primary'
              className={classes.btnRegistro}
              // href='campanas.html'
            >
              Registro
            </Link>
          </Grid>
        </Card>
      </div>
    </Fragment>
  );
};

export default LoginComponent;
