import React from 'react';
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.scss"

function Search() {

  const style = {
    borderRadius: "100px",
    border: "1px solid #DADADA",
    outline: "none",
    padding: "10px 15px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
    margin: "0",
    alignItems:"center"
  };

  return (
    <div className="search-container container">
      <div className="row justify-content-center align-items-center remove-style">
        <div className="col-sm-8">
          <TextField
            id="outlined-basic"
            variant="standard"
            fullWidth
            className='search-bar'
            sx={style}
            placeholder="Search Location"
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  {<SearchIcon sx={{borderLeft: "1px solid #DADADA", paddingLeft:"0.2em",height:"50px"}}/>}
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Search