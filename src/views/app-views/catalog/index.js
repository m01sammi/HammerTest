import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from "configs/AppConfig";

const Catalog = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/category`} component={lazy(() => import(`./category`))} />
      <Route path={`${match.url}/collections`} component={lazy(() => import(`./collections`))} />
      <Route path={`${match.url}/combo`} component={lazy(() => import(`./combo`))} />
      <Route path={`${match.url}/product`} component={lazy(() => import(`./product`))} />
	<Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/dashboard`} />
    </Switch>
  </Suspense>
);

export default Catalog;