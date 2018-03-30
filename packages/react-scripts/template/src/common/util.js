import React from 'react';
import { Route } from 'react-router-dom';

export function createFakeRoute(path) {
  return <Route exact path={path} component={() => <div>{path}</div>} />;
}

export function retainSearchPath(path) {
  return `${path}${window.location.search}`;
}
