import { ClickAwayListener, IconButton, Paper, Popper } from '@mui/material';
import { FiMoreVertical } from 'react-icons/fi';
import { useRef, useState } from 'react';
import Search from '../search/Search';
import Transitions, { TransitionsType } from '../../../../components/@extended/Transitions';
import Profile from '../profile/Profile';
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
  const popperOptions= {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 9]
        }
      }
    ]
  };
  return (
    <>
      {moreButton}
      <Popper
        transition
        disablePortal
        placement="bottom-end"
        open={open}
        role={undefined}
        anchorEl={anchorRef.current}
        popperOptions={popperOptions}
      >
        {({ TransitionProps }) => (
          <Transitions type={TransitionsType.fade} in={open} {...TransitionProps}>
            <ClickAwayListener onClickAway={handleClose}>
              <Paper
                sx={{
                  p: 1,
                  width: '100vw',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <Search />
                <Profile />
              </Paper>
            </ClickAwayListener>
          </Transitions>
        )}
      </Popper>
    </>
  );
};

export default MobileSection;
