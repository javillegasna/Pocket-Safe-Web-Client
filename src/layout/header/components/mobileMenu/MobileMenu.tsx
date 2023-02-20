import { OptionsGeneric } from '@popperjs/core'
import { ClickAwayListener, IconButton, Paper, Popper } from '@mui/material';
import { FiMoreVertical } from 'react-icons/fi';
import { useRef, useState } from 'react';
import Search from '../search/Search';
import Transitions, { TransitionsType } from '../../../../components/@extended/Transitions';
const MobileSection = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLAnchorElement | null>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (!event.target) return;
    if (!anchorRef.current) return;
    const target = event.target as HTMLAnchorElement;
    if (anchorRef.current.contains(target)) {
      return;
    }
    setOpen(false);
  };

  const moreButton = (
    <IconButton
      component="span"
      disableRipple
      ref={anchorRef}
      onClick={handleToggle}
      sx={{
        color: open ? 'grey.000' : 'grey.900',
        bgcolor: open ? 'grey.300' : 'grey.100',
        ml: 0.75
      }}
    >
      <FiMoreVertical />
    </IconButton>
  );
  const popperOptions:Partial<OptionsGeneric<any>> = {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 9]
        }
      }
    ]
  }
  return (
    <>
      {moreButton}
      <Popper
        transition
        disablePortal
        placement="bottom-end"
        open={open}
        role={undefined}
        sx={{ width: '100%' }}
        anchorEl={anchorRef.current}
        popperOptions={popperOptions}
      >
        {({ TransitionProps }) => (
          <Transitions type={TransitionsType.fade} in={open} {...TransitionProps}>
            <ClickAwayListener onClickAway={handleClose}>
              <Paper sx={{p:1 }}>
                <Search />
              </Paper>
            </ClickAwayListener>
          </Transitions>
        )}
      </Popper>
    </>
  );
};

export default MobileSection;
