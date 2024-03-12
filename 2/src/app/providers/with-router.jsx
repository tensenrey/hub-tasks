import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { RouterConfig } from "../router/config.js";
import { Spinner } from "flowbite-react";

export const withRouter = (component) => () =>
  (
    <BrowserRouter {...RouterConfig}>
      <Suspense
        fallback={
          <div className="w-screen h-screen">
            <Spinner />
          </div>
        }
      >
        {component()}
      </Suspense>
    </BrowserRouter>
  );
