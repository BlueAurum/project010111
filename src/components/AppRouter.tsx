import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes, RouteNames } from "../routes";
import { useAppSelector } from "../hooks/useTypedHooks";
import { authState } from "../store/slices/auth";

const AppRouter = () => {
  const { auth } = useAppSelector(authState);

  return (
    <>
      {auth ? (
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              path={route.path}
              key={route.path}
              element={<route.element />}
            />
          ))}
          <Route
            path="*"
            element={<Navigate replace to={RouteNames.HOME_PAGE} />}
          />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              path={route.path}
              key={route.path}
              element={<route.element />}
            />
          ))}
          <Route
            path="*"
            element={<Navigate replace to={RouteNames.LOGIN_PAGE} />}
          />
        </Routes>
      )}
    </>
  );
};

export default AppRouter;
