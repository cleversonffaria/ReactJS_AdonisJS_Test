import React,{Suspense} from 'react';
import * as router from "react-router-dom";
import {
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav2 as AppSidebarNav
} from "@coreui/react";
import {App}from "./style";
// sidebar nav config
import navigation from "../../views/site/_nav";

export default function siderbar(props) {
  return (
    <App >
      <AppSidebar fixed mobile="true" className="d-lg-none">
          <AppSidebarHeader />
          <AppSidebarForm />
            <Suspense>           
              <AppSidebarNav
                navConfig={navigation}
                {...props}
                router={router}
              />
            </Suspense>
          <AppSidebarFooter />
          <AppSidebarMinimizer />
      </AppSidebar>
    </App>
  );
}
