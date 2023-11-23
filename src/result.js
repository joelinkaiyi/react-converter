import React from "react";

const Result = () => {
  return (
    <div
      className="result"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "12.5rem",
        height: "12.5rem",
        border: "3px solid red",
        borderRadius: "50%",
        textAlign: "center",
        margin: "5rem auto",
      }}
    >
      <p
        id="text"
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
          color: "#fff",
          marginTop: "0.938rem",
        }}
      >
        Result
      </p>
      <h1
        id="result"
        style={{ fontSize: "3.5rem", fontWeight: "bold", color: "#fff",position:'relative',top:'-1rem' }}
      >
        0
      </h1>
    </div>
  );
};

export default Result;
