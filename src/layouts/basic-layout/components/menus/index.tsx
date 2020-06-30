import React from "react";
import { Link } from "react-router-dom";

import pageRouterConfig from "@/router/page-routes.config";

export default class Menu extends React.Component {
  private getPath(path: string | string[] | undefined) {
    if (path === undefined) {
      return "/";
    } else if (typeof path === "string") {
      return path;
    } else {
      return path[0];
    }
  }

  render() {
    return (
      <ul>
        {pageRouterConfig.map((config, index) => (
          <li key={index}>
            <Link to={this.getPath(config.path)}>{config.label}</Link>
          </li>
        ))}
      </ul>
    );
  }
}
