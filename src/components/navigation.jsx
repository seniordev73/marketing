import React, { useState } from "react";

export const Navigation = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleLinkClick = (event) => {
    event.target.style.color = "#5ca9fb"; // Set color to blue on click
  };

  return (
    <nav
      style={{
        backgroundColor: "#fff",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
        position: "fixed",
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <div>
          <a href="#page-top" style={{ textDecoration: "none" }}>
            <img
              src="/img/CHRONO.png"
              alt="Logo"
              style={{
                height: "auto",
                maxHeight: "70px",
                margin: "5px 0",
              }}
            />
          </a>
        </div>

        {/* Navbar Links */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            listStyleType: "none",
            margin: 0,
            padding: 0,
            gap: "20px",
          }}
        >
          <li>
            <a
              href="#advertiser"
              style={{
                color: "#00a76f",
                fontFamily: "Barlow, sans-serif",
                fontWeight: "600",
                fontSize: "16px",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Advertisers
            </a>
          </li>
          <li>
            <a
              href="#affiliates"
              style={{
                color: "#00a76f",
                fontFamily: "Barlow, sans-serif",
                fontWeight: "600",
                fontSize: "16px",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Affiliates
            </a>
          </li>
          <li>
            <a
              href="#smartlink"
              style={{
                color: "#00a76f",
                fontFamily: "Barlow, sans-serif",
                fontWeight: "600",
                fontSize: "16px",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Smartlink
            </a>
          </li>
          <li>
            <a
              href="#ecommerce"
              style={{
                color: "#00a76f",
                fontFamily: "Barlow, sans-serif",
                fontWeight: "600",
                fontSize: "16px",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              E-Commerce
            </a>
          </li>
          <li>
            <a
              href={process.env.REACT_APP_LOGIN_URL || "#"}
              style={{
                color: "#00a76f",
                fontFamily: "Barlow, sans-serif",
                fontWeight: "600",
                fontSize: "16px",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Log in
            </a>
          </li>

          {/* Sign Up Dropdown */}
          <li
            style={{
              position: "relative",
              cursor: "pointer",
            }}
          >
            <span
              onClick={toggleDropdown}
              style={{
                color: "#00a76f",
                fontFamily: "Barlow, sans-serif",
                fontWeight: "600",
                fontSize: "16px",
                textDecoration: "none",
                cursor: "pointer",
                transition: "color 0.3s ease-in-out",
              }}
            >
              Sign up
            </span>
            <ul
              style={{
                position: "absolute",
                top: "calc(100% + 5px)",
                left: "0",
                backgroundColor: "#E9F6FA",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "4px",
                listStyleType: "none",
                padding: "10px 0",
                margin: 0,
                zIndex: 1000,
                minWidth: "150px",
                transform: isDropdownOpen ? "translateY(10px)" : "translateY(-10px)",
                opacity: isDropdownOpen ? 1 : 0,
                transformOrigin: "top left",
                transition: "opacity 0.3s ease, transform 0.3s ease",
                pointerEvents: isDropdownOpen ? "auto" : "none",
              }}
            >
              <li
                style={{
                  padding: "10px 15px",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <a
                  href={process.env.REACT_APP_REGISTER_ADVERTISER_URL || "#"}
                  style={{
                    color: "#000",
                    fontFamily: "Barlow, sans-serif",
                    fontWeight: "600",
                    fontSize: "14px",
                    textDecoration: "none",
                    display: "block",
                    transition: "color 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#5ca9fb")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#000")}
                  onClick={handleLinkClick}
                >
                  Advertiser
                </a>
              </li>
              <li
                style={{
                  padding: "10px 15px",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <a
                  href={process.env.REACT_APP_REGISTER_AFFILIATE_URL || "#"}
                  style={{
                    color: "#000",
                    fontFamily: "Barlow, sans-serif",
                    fontWeight: "600",
                    fontSize: "14px",
                    textDecoration: "none",
                    display: "block",
                    transition: "color 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#5ca9fb")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#000")}
                  onClick={handleLinkClick}
                >
                  Affiliate
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};
