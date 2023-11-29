import * as React from "react";
import { useState,useEffect } from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import SwapVertIcon from "@mui/icons-material/SwapVert";
const val = [
  {
    value: "binary",
    label: "二進制",
    base: 2,
  },
  {
    value: "octal",
    label: "八進制",
    base: 8,
  },
  {
    value: "decimal",
    label: "十進制",
    base: 10,
  },
  {
    value: "hexadecimal",
    label: "十六進制",
    base: 16,
  },
];


const convert = (value, fromBase, toBase) => {
  const parsedValue = parseInt(
    value,
    val.find((option) => option.value === fromBase).base
  );
  return parsedValue.toString(
    val.find((option) => option.value === toBase).base
  );
};

export default function Selector() {
  const [fromBase, setFromBase] = useState("decimal");
  const [toBase, setToBase] = useState("binary");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    setResult(convert(value, fromBase, toBase));
  }, [value, fromBase, toBase]);

  const handleFromBaseChange = (event) => {
    setFromBase(event.target.value);
  };

  const handleToBaseChange = (event) => {
    setToBase(event.target.value);
  };

  const handleValueChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const handleReverse = () => {
    const tempFromBase = toBase;
    const tempToBase = fromBase;
    setFromBase(tempFromBase);
    setToBase(tempToBase);
    setResult(convert(value, tempFromBase, tempToBase));
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ borderBottom: "0.063rem solid #404040" }}
    >
      <div>
        <h2 style={{ color: "#fff", fontSize: "2rem" }}>從</h2>
        <TextField
          id="outlined-select-from"
          select
          value={fromBase}
          onChange={handleFromBaseChange}
          label="From"
          variant="filled"
          sx={{
            backgroundColor: "#fff",
            textAlign: "left",
            borderRadius: "0.625rem",
            marginLeft: "1rem",
          }}
        >
          {val.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          required
          label="Value"
          id="outlined-required"
          value={value}
          onChange={handleValueChange}
          variant="filled"
          sx={{
            marginLeft: "1rem",
            backgroundColor: "#fff",
            borderRadius: "0.625rem",
            marginLeft: "1rem",
          }}
        />
        <div>
          <button
            type="button"
            onClick={handleReverse}
            style={{
              borderRadius: "1.25rem",
              position: "relative",
              top: "3rem",
              textAlign: "center",
              background: "none",
              border: "none",
              cursor:'pointer'
            }}
          >
            <SwapVertIcon
              style={{
                color: "#fff",
                fontSize: "5rem",
                marginTop: "0.5rem",
              }}
            />
          </button>
        </div>
      </div>
      <div style={{ marginBottom: "14rem" }}>
        <h2 style={{ color: "#fff", fontSize: "2rem", marginTop: "5rem" }}>
          轉換到
        </h2>
        <TextField
          id="filled-select-to"
          select
          value={toBase}
          onChange={handleToBaseChange}
          label="To"
          variant="filled"
          sx={{
            backgroundColor: "#fff",
            textAlign: "left",
            borderRadius: "0.625rem",
            marginLeft: "1rem",
            marginBottom: "1rem",
          }}
        >
          {val.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          required
          label="Result"
          id="outlined-result"
          value={result}
          variant="filled"
          sx={{
            marginLeft: "1rem",
            backgroundColor: "#fff",
            borderRadius: "0.625rem",
          }}
        />
      </div>
    </Box>
  );
}