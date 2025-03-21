import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from "configs/AppConfig";

const Offlain = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
	<Switch>
	  <Route path={`${match.url}/address`} component={lazy(() => import(`./address`))} />
	  <Route path={`${match.url}/geozones`} component={lazy(() => import(`./geozones`))} />
	<Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/dashboard`} />
	</Switch>
  </Suspense>
);

export default Offlain;