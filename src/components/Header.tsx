import React from "react";
import NewTaskBtn from "./NewTaskBtn";
interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="container my-3">
      <div className="row justify-content-between align-items-center">
        <p className="col-md-4 h1 font-monospace">{title}</p>
        <NewTaskBtn />
      </div>
    </div>
  );
};

export default Header;
