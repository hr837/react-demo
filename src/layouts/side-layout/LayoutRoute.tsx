import React from "react";
import {
  withRouter,
  RouteComponentProps,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import WorkSpaceRoutes from "@/router/workspace.routes";
import "animate.css";

function LayoutRoute(props: RouteComponentProps) {
  return (
    <TransitionGroup>
      <CSSTransition
        key={props.location.key}
        classNames={{
          enter: "animate__animated animate__zoomInRight",
          exit: "animate__animated animate__zoomOutRight",
        }}
        timeout={300}
      >
        <Switch location={props.location}>
          {WorkSpaceRoutes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
          <Redirect to="/not-found" />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}
export default withRouter(LayoutRoute);
