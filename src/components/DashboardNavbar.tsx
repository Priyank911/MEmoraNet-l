import React from "react";
import { UserButton } from "@clerk/clerk-react";
import "./DashboardNavbar.css";

export default function DashboardNavbar() {
  return (
    <nav className="dashboard-navbar">
      <div className="dashboard-navbar-left">
      <img src="/logo.png" alt="MEmoraNet Logo" className="memora-logo-icon" />
        <span className="dashboard-navbar-divider">/</span>
        <span className="dashboard-logo-text">MEmoraNet</span>
      </div>
      <div className="dashboard-navbar-user">
        <UserButton />
      </div>
    </nav>
  );
}
