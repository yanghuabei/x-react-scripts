import React from 'react';
import { Route } from 'react-router-dom';

export default function(url) {
  return <Route exact path={url} component={() => <div>{url}</div>} />;
}
