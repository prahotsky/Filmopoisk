import React from "react";

import GenresList from "../../components/GenresList";

import "./style.css";
import logo from "../../assets/img/logo.png";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-wrapper">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <GenresList />
    </aside>
  );
};

export default Sidebar;
