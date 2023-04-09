import React from "react";

//ajout d'une sidebar avec CBDSidebar

//sidebar: npm install cdbreact
//puis import du package
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarContent,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from "cdbreact";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#0C6DFD">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
            </NavLink>

            {/* ajouter les liens et les noms dans la Sidebar */}
            <NavLink exact to="/business" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Business</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/sport" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Sports</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/health" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Santé</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/hero404"
              target="_blank"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="exclamation-circle">
                404 page
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}
