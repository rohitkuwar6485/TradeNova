import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isLogoHover, setIsLogoHover] = useState(false);
  const [isUserHover, setIsUserHover] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/logout`,
        {},
        { withCredentials: true }
      );
      alert("Logout successful!");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      navigate(`${import.meta.env.VITE_FRONTEND_URL}/signup`);
    }
  };

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Orders", path: "/orders" },
    { name: "Holdings", path: "/holdings" },
    { name: "Positions", path: "/positions" },
    { name: "Funds", path: "/funds" },
    { name: "Apps", path: "/apps" },
  ];

  return (
    <div className="menu-container mt-4">
      {/* Logo */}
      <img
        src="logo.png"
        style={{
          width: "50px",
          cursor: "pointer",
          color: isLogoHover ? "red" : "black",
        }}
        className="mb-4"
        alt="Logo"
        onMouseEnter={() => setIsLogoHover(true)}
        onMouseLeave={() => setIsLogoHover(false)}
      />

      <div className="menus">
        <ul className="list-unstyled">
          {menuItems.map((item, index) => (
            <li key={index} className="mb-2">
              <Link
                to={item.path}
                style={{ textDecoration: "none" }}
                onClick={() => setSelectedMenu(index)}
              >
                <p
                  className={`fw-semibold px-2 rounded mt-2`}
                  style={{
                    color: selectedMenu === index ? "red" : "black",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "red")}
                  onMouseLeave={(e) =>
                    (e.target.style.color =
                      selectedMenu === index ? "red" : "black")
                  }
                >
                  {item.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <hr />

        {/* Bootstrap User Dropdown */}
        <div
          className="dropdown d-flex align-items-center mb-4"
          onMouseEnter={() => setIsUserHover(true)}
          onMouseLeave={() => setIsUserHover(false)}
        >
          <div
            className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center me-2"
            style={{ width: "40px", height: "40px" }}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            ZU
          </div>
          <span
            className="fw-semibold mb-1 dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ color: isUserHover ? "red" : "black", cursor: "pointer" }}
          >
            USERID
          </span>

          <ul className="dropdown-menu dropdown-menu-end shadow-sm">
            <li>
              <Link className="dropdown-item" to="/profile">
                👤 Profile
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <button
                className="dropdown-item text-danger"
                onClick={handleLogout}
              >
                🚪 Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
