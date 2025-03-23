import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";
import { APP_PREFIX_PATH } from "configs/AppConfig";

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route exact path={`${APP_PREFIX_PATH}`} component={lazy(() => import('./dashboard'))} />
        <Route path={`${APP_PREFIX_PATH}/dashboard`} component={lazy(() => import(`./dashboard`))} />
        <Route path={`${APP_PREFIX_PATH}/catalog`} component={lazy(() => import(`./catalog`))} />
        <Route path={`${APP_PREFIX_PATH}/orders`} component={lazy(() => import(`./orders`))} />
        <Route path={`${APP_PREFIX_PATH}/users`} component={lazy(() => import(`./users`))} />
        <Route path={`${APP_PREFIX_PATH}/planner`} component={lazy(() => import(`./planner`))} />
        <Route path={`${APP_PREFIX_PATH}/promocodes`} component={lazy(() => import(`./promocodes`))} />
        <Route path={`${APP_PREFIX_PATH}/offlain`} component={lazy(() => import(`./offlain`))} />
        <Route path={`${APP_PREFIX_PATH}/employees`} component={lazy(() => import(`./employees`))} />
        <Route path={`${APP_PREFIX_PATH}/mailings`} component={lazy(() => import(`./mailings`))} />
        <Route path={`${APP_PREFIX_PATH}/settings`} component={lazy(() => import(`./settings`))} />
        <Route path={`${APP_PREFIX_PATH}/mobile`} component={lazy(() => import(`./mobile`))} />
        <Route path={`${APP_PREFIX_PATH}/logs`} component={lazy(() => import(`./logs`))} />
      </Switch>
    </Suspense>
  );
};

export default React.memo(AppViews);
