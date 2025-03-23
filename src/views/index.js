import React from "react"; 
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AppLayout from "layouts/app-layout";
import AuthLayout from 'layouts/auth-layout';
import { ConfigProvider } from 'antd';
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from 'configs/AppConfig';

export const Views = (props) => {
  const { locale, location } = props;
  
  return (
    <ConfigProvider locale={locale}>
      <Switch>
        <Route exact path="/">
          <Redirect to={APP_PREFIX_PATH} />
        </Route>
        <Route path={AUTH_PREFIX_PATH}>
          <AuthLayout />
        </Route>
        <Route path={APP_PREFIX_PATH}>
          <AppLayout location={location}/>
        </Route>
      </Switch>
    </ConfigProvider>
  );
}

const mapStateToProps = ({ theme, auth }) => {
  const { locale } = theme;
  const { token } = auth;
  return { locale, token }
};

export default withRouter(connect(mapStateToProps)(Views));
