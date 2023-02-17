import { Theme } from '@mui/material';
import { merge } from 'lodash';

import { OverrideTheme } from './overrideTheme';

import Badge from './badge';
import Button from './button';
import CardContent from './cardContent';
import Chip from './chip';
import IconButton from './iconButton';
import InputLabel from './inputLabel';
import LinearProgress from './linearProgress';
import ListItemIcon from './listItemIcon';
import OutlinedInput from './outlineInput';
import Tab from './tab';
import TableCell from './tableCell';
import Tabs from './tabs';
import Typography from './typography';

export default function ComponentsOverrides(theme: Theme) {
  return merge(
    OverrideTheme({
      elementKey: 'MuiLink',
      defaultProps:{underline: 'hover'}
    })({}),
    OverrideTheme({
      elementKey: 'MuiButton',
      defaultProps: { disableElevation: true }
    })(Button(theme)),
    OverrideTheme({ elementKey: 'MuiBadge' })(Badge(theme)),
    OverrideTheme({ elementKey: 'MuiCardContent' })(CardContent()),
    OverrideTheme({ elementKey: 'MuiChip' })(Chip(theme)),
    OverrideTheme({ elementKey: 'MuiIconButton' })(IconButton(theme)),
    OverrideTheme({ elementKey: 'MuiInputLabel' })(InputLabel(theme)),
    OverrideTheme({ elementKey: 'MuiLinearProgress' })(LinearProgress()),
    OverrideTheme({ elementKey: 'MuiListItemIcon' })(ListItemIcon()),
    OverrideTheme({ elementKey: 'MuiOutlinedInput' })(OutlinedInput(theme)),
    OverrideTheme({ elementKey: 'MuiTab' })(Tab(theme)),
    OverrideTheme({ elementKey: 'MuiTableCell' })(TableCell(theme)),
    OverrideTheme({ elementKey: 'MuiTabs' })(Tabs()),
    OverrideTheme({ elementKey: 'MuiTypography' })(Typography()),
  );
}
