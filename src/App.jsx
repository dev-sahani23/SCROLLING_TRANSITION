import React, { useState, useEffect } from "react";

const App = () => {
  const [bgColor, setBgColor] = useState("white");

  useEffect(() => {
    const debounce = (func, wait) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    };

    const handleScroll = debounce(() => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Change background color based on scroll position
      if (scrollPosition > windowHeight / 2) {
        setBgColor("black");
      } else {
        setBgColor("white");
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="app"
      style={{
        backgroundColor: bgColor,
        transition: "background-color 0.5s ease",
        minHeight: "200vh",
        position: "relative",
      }}
    >
      {/* Centered Quote Text */}
      <div
        className="content"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: bgColor === "white" ? "black" : "white",
          transition: "color 0.5s ease",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            margin: "20px 0",
            transition: "color 0.5s ease",
          }}
        >
          "{bgColor === "white" ? (
            <>
              In the middle of every <span className="important-word">difficulty</span> lies <span className="important-word">opportunity</span>.
            </>
          ) : (
            <>
              <span className="important-word">Success</span> is not final, <span className="important-word">failure</span> is not fatal: It is the <span className="important-word">courage</span> to continue that counts.
            </>
          )}"
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            margin: "20px 0",
            transition: "color 0.5s ease",
          }}
        >
          <span
            style={{
              fontSize: "1.5rem",
              transition: "transform 0.5s ease",
              display: "inline-block",
              color: bgColor === "white" ? "black" : "white",
            }}
            className="quote-author"
          >
            - Albert Einstein
          </span>
        </p>
      </div>

      {/* Jumping Circle Positioned Lower */}
      <div
        className="jumping-circle"
        style={{
          width: "80px",
          height: "80px",
          backgroundColor: bgColor === "white" ? "black" : "white",
          borderRadius: "50%",
          position: "fixed",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: bgColor === "white" ? "-40px" : "10px",
          transition: "bottom 0.5s ease",
          animation: "bounce 2s infinite",
        }}
      ></div>

      {/* Bounce Animation */}
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateX(-50%) translateY(0);
            }
            40% {
              transform: translateX(-50%) translateY(-30px);
            }
            60% {
              transform: translateX(-50%) translateY(-15px);
            }
          }

          .quote-author {
            transition: transform 0.5s ease, color 0.5s ease;
          }

          .quote-author:hover {
            transform: scale(1.1);
            color: #ff6347;
          }

          .important-word {
            transition: color 0.5s ease;
          }

          .important-word:hover {
            color: #ff6347;
          }
        `}
      </style>
    </div>
  );
};

export default App;
