import { Theme } from '@mui/material';

export default function appBar(theme: Theme) {
  return {
    root: {
      borderBottom: `1px solid ${theme.palette.divider}`
    }
  };
}