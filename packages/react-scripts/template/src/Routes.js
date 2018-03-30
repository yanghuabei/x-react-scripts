import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Welcome from './biz/start/components/Welcome';
import UserList from './biz/user/components/UserList';
import { createFakeRoute, retainSearchPath } from './common/util';

export default function Routes() {
  return (
    <Fragment>
      <Route
        exact
        path="/"
        component={() => <Redirect to={retainSearchPath('/welcome')} />}
      />
      <Route path="/welcome" component={Welcome} />
      <Route path="/user/list" component={UserList} />
      {createFakeRoute('/option3')}
    </Fragment>
  );
}
