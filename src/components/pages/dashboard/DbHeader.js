import React from "react";
import "./dashboard.css";
import { FaRegBell } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import {
  logout
} from "../../../actions/userActions";

const DbHeader = ({ user }) => {

  const alert = useAlert();
    const dispatch = useDispatch();

  const logoutHandler = () => {
      dispatch(logout());
      alert.success("Logged out successfully.");
    };
  return (
    <div className="Db__header">
      <div className="header__name flex">
        {user && <h1>{user.userName && user.userName}</h1>}
      </div>
      <div className="Db__head_icon flex">
        <div className="bell_icon_wrap">
          <FaRegBell className="head__icon" />
          <label></label>
        </div>
        <div className="admin__avatar">
          <RiAdminLine className="head__icon"  onClick={logoutHandler}/>
        </div>
      </div>
    </div>
  );
};

export default DbHeader;
