import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

const SearchInputForm: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    // Handle button click here
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10",
      }}
      noValidate
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Enter repo URL"
        value={inputValue}
        onChange={handleInputChange}
        sx={{ width: "85%" }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ m: 1, p: 2 }}
        onClick={handleButtonClick}
      >
        Load issues
      </Button>
    </Box>
  );
};

export default SearchInputForm;
