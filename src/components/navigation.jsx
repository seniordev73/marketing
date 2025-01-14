import React, { useState, useEffect  } from "react";

export const Navigation = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth < 768); // Mobile view for screens < 768px
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleLinkClick = (event) => {
    event.target.style.color = "#5ca9fb"; // Set color to blue on click
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
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
        {/* web landing responsive */}
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
        {/* web landing responsive */}
        {/* Navbar Links */}
        {!isMobileView && (
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
        )}
        {/* Hamburger Menu (Mobile View) */}
        {isMobileView && (
          <div
            onClick={toggleMobileMenu}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              gap: "5px",
              width: "30px",
              height: "30px",
              zIndex: 1001, // Ensure the toggle button stays above the dropdown menu
            }}
          >
            <div
              style={{
                width: "30px",
                height: "3px",
                backgroundColor: "#141414", // Black toggle lines
                borderRadius: "3px",
                transition: "background-color 0.3s ease",
              }}
            ></div>
            <div
              style={{
                width: "30px",
                height: "3px",
                backgroundColor: "#141414",
                borderRadius: "3px",
                transition: "background-color 0.3s ease",
              }}
            ></div>
            <div
              style={{
                width: "30px",
                height: "3px",
                backgroundColor: "#141414",
                borderRadius: "3px",
                transition: "background-color 0.3s ease",
              }}
            ></div>
          </div>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileView && isMobileMenuOpen && (
        <div
          style={{
            backgroundColor: "#141414",
            color: "#fff",
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            padding: "20px 0",
            zIndex: 999,
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              textAlign: "center",
            }}
          >
            <li style={{ padding: "10px 0" }}>
              <a
                href="#advertiser"
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Advertisers
              </a>
            </li>
            <li style={{ padding: "10px 0" }}>
              <a
                href="#affiliates"
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Affiliates
              </a>
            </li>
            <li style={{ padding: "10px 0" }}>
              <a
                href="#smartlink"
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Smartlink
              </a>
            </li>
            <li style={{ padding: "10px 0" }}>
              <a
                href="#ecommerce"
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                E-commerce
              </a>
            </li>
            <li style={{ padding: "10px 0" }}>
              <a
                href={process.env.REACT_APP_LOGIN_URL || "#"}
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Log in
              </a>
            </li>
            <li style={{ padding: "10px 0" }}>
              <a
                href={process.env.REACT_APP_REGISTER_ADVERTISER_URL || "#"}
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Register Advertiser
              </a>
            </li>
            <li style={{ padding: "10px 0" }}>
              <a
                href={process.env.REACT_APP_REGISTER_AFFILIATE_URL || "#"}
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Register Affiliate
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
