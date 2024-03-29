import { Theme } from '@mui/material';

export default function badge(theme: Theme) {
  return {
    standard: {
      minWidth: theme.spacing(2),
      height: theme.spacing(2),
      padding: theme.spacing(0.5)
    }
  };
}
