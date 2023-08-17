import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { useNavigate } from "react-router-dom";

const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const Navigate = useNavigate();
  if (loading) {
    return (
      <h2 className="text-center text-red-600 text-3xl font-bold">
        Loading...
      </h2>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate></Navigate>;
};

export default Private;
