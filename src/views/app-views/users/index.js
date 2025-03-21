import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";

const Users = ({ match }) => (
  <Suspense fallback={<Loading cover="content" />}>
    <Switch>
      <Route exact path={`${match.url}/list`} component={lazy(() => import('./list'))} />
      <Route exact path={`${match.url}/groups`} component={lazy(() => import('./groups'))} />
      <Redirect from={`${match.url}`} to={`${match.url}/list`} />
    </Switch>
  </Suspense>
);

export default Users;
