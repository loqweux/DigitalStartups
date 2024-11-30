import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/homePage/Home";
import SignInPage from "./pages/signInPage/SignInPage";
import styles from "./styles/app.module.scss";

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div>
      <div className={styles.header}>
        <h1>Best Application</h1>
        {user ? (
          <button className={styles.logoutButton} onClick={handleLogout}>
            Log Out
          </button>
        ) : (
          <Link to="/signin">
            <button className={styles.signInButton}>Sign In</button>
          </Link>
        )}
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInPage setUser={setUser} />} />
      </Routes>
    </div>
  );
};

export default App;
