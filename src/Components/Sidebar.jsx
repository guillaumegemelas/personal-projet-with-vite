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
      {/* j'ai supprimé exact et activeClassName car erreurs dans la console */}
      <CDBSidebar textColor="#fff" backgroundColor="#0C6DFD">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Menu
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/" className="">
              <CDBSidebarMenuItem icon="igloo">Home</CDBSidebarMenuItem>
            </NavLink>

            {/* ajouter les liens et les noms dans la Sidebar */}
            <NavLink to="/business" className="">
              <CDBSidebarMenuItem icon="chart-line">
                Business
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/sport" className="">
              <CDBSidebarMenuItem icon="user">Sports</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/health" className="">
              <CDBSidebarMenuItem icon="stethoscope">Santé</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="/entertainement"
              //si on veut ouvrir dans une autre page
              // target="_blank"
              className=""
            >
              <CDBSidebarMenuItem icon="feather">
                Entertainement
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/tech" className="bg-primary">
              <CDBSidebarMenuItem icon="laptop">Tech</CDBSidebarMenuItem>
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
