import React from "react";
import { UserButton } from "@clerk/clerk-react";
import "./DashboardNavbar.css";

export default function DashboardNavbar() {
  return (
    <nav className="dashboard-navbar">
      <div className="dashboard-navbar-left">
        <span className="dashboard-logo-icon">▲</span>
        <span className="dashboard-navbar-divider">/</span>
        <span className="dashboard-logo-text">MEmoraNet</span>
      </div>
      <div className="dashboard-navbar-user">
        <UserButton />
      </div>
    </nav>
  );
}
