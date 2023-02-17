import { Theme } from '@mui/material';
export default function Checkbox(theme:Theme) {
  return {
    root: {
      color: theme.palette.secondary.light
    }
  };
}
