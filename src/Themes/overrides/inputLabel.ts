import { Theme } from "@mui/material";

export default function inputLabel(theme :Theme) {
  return {
    root: {
      color: theme.palette.grey[600]
    },
    outlined: {
      lineHeight: '0.8em',
      '&.MuiInputLabel-sizeSmall': {
        lineHeight: '1em'
      },
      '&.MuiInputLabel-shrink': {
        background: theme.palette.background.paper,
        padding: '0 8px',
        marginLeft: -6,
        lineHeight: '1.4375em'
      }
    }
  };
}
