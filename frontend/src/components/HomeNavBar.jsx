import React, {Fragment} from 'react';

export const HomeNavBar = () => {
  return (
    <Fragment>
      <nav id='nav_presentacion' className='nav_presentacion'>
        <div className='nav_presentacion_izq'>
          <img src='img/logo.svg' alt='' />
          <span>Mailer</span>
        </div>
      </nav>
    </Fragment>
  );
};
