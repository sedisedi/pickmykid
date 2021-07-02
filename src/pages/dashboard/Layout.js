import React, { useContext, Suspense, useEffect, lazy } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import routes from "../../routes";

import Sidebar from '../../component/Sidebar';
import Header from '../dashboard/Header';
import Main from '../dashboard/Main';
import AppSuspense from '../../AppSuspense';
import { SidebarContext } from '../../context/SidebarContext'

const Home = lazy(() => import("../../Home"));

function Layout() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let location = useLocation();

  // useEffect(() => {
  //  closeSidebar();
  // }, [location]);

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
       isSidebarOpen && "overflow-hidden"
      }`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          <Suspense fallback={<AppSuspense />}>
            <Switch>
              {routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`/dashboard${route.path}`}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null;
              })}
              <Redirect exact from="/app" to="/app/dashboard" />
              <Route component={Home} />
            </Switch>
          </Suspense>
        </Main>
      </div>
    </div>
  );
}

export default Layout;
