import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
  const startAdornment = (
    <InputAdornment position="start" sx={{ mr: -0.5 }}>
      <AiOutlineSearch />
    </InputAdornment>
  );
  const inputProps = {
    'aria-label': 'weight'
  };
  return (
    <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
      <FormControl sx={{ width: { xs: '100%', md: 224 } }}>
        <OutlinedInput
          size="small"
          id="header-search"
          sx={{ backgroundColor: '#fff' }}
          aria-describedby="header-search-text"
          inputProps={inputProps}
          placeholder="Ctrl + K"
          startAdornment={startAdornment}
        />
      </FormControl>
    </Box>
  );
};
export default Search;
