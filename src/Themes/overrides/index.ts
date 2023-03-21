import { Theme } from '@mui/material';
import { merge } from 'lodash';

import { OverrideTheme } from './overrideTheme';

import badge from './badge';
import button from './button';
import cardContent from './cardContent';
import chip from './chip';
import iconButton from './iconButton';
import inputLabel from './inputLabel';
import linearProgress from './linearProgress';
import listItemIcon from './listItemIcon';
import outlinedInput from './outlineInput';
import tab from './tab';
import tableCell from './tableCell';
import tabs from './tabs';
import typography from './typography';
import appBar from './appbar';

export default function ComponentsOverrides(theme: Theme) {
  return merge(
    OverrideTheme({
      elementKey: 'Link',
      defaultProps:{underline: 'hover'}
    })(),
    OverrideTheme({
      elementKey: 'Button',
      defaultProps: { disableElevation: true }
    })(button(theme)),
    OverrideTheme({ elementKey: 'Badge' })(badge(theme)),
    OverrideTheme({ elementKey: 'CardContent' })(cardContent()),
    OverrideTheme({ elementKey: 'Chip' })(chip(theme)),
    OverrideTheme({ elementKey: 'IconButton' })(iconButton(theme)),
    OverrideTheme({ elementKey: 'InputLabel' })(inputLabel(theme)),
    OverrideTheme({ elementKey: 'LinearProgress' })(linearProgress()),
    OverrideTheme({ elementKey: 'ListItemIcon' })(listItemIcon()),
    OverrideTheme({ elementKey: 'OutlinedInput' })(outlinedInput(theme)),
    OverrideTheme({ elementKey: 'Tab' })(tab(theme)),
    OverrideTheme({ elementKey: 'TableCell' })(tableCell(theme)),
    OverrideTheme({ elementKey: 'Tabs' })(tabs()),
    OverrideTheme({ elementKey: 'Typography' })(typography()),
    OverrideTheme({ elementKey: 'AppBar' })(appBar(theme)),
  );
}
