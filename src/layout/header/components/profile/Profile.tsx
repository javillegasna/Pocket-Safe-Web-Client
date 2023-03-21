import React, { useState } from 'react';
import { Avatar, ButtonBase, Typography } from '@mui/material';

import avatar1 from '../../../../assets/images/avatars/avatar-1.png';

const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ButtonBase
        sx={{
          ml:1,
          p:0.4,
          width:"150px",
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          bgcolor: open ? 'grey.300' : 'transparent',
          borderRadius: 1,
          '&:hover': { bgcolor: 'grey.300', color: 'black' }
        }}
      >
        <Avatar alt="profile user" src={avatar1} sx={{ width: 32, height: 32 }} />
        <Typography variant="subtitle1">John Doe</Typography>
      </ButtonBase>
    </>
  );
};

export default Profile;
