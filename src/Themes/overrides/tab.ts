import { Theme } from "@mui/material";

export default function Tab(theme :Theme) {
  return {
    root: {
      minHeight: 46,
      color: theme.palette.text.primary
    }
  };
}
