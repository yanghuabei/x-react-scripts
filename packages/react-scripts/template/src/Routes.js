import React, { Fragment } from 'react';
import Start from './biz/start/components/Start';
import { Route } from 'react-router-dom';
import createFakeRoute from './common/createFakeRoute';

export default function Routes() {
  return (
    <Fragment>
      {createFakeRoute('/')}
      <Route path="/start" component={Start} />
      {createFakeRoute('/option2')}
      {createFakeRoute('/option3')}
    </Fragment>
  );
}
