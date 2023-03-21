import { AppBar, IconButton, Link, PaletteMode, Toolbar, Theme } from '@mui/material';
import { SxProps } from '@mui/material/styles';
import { AiOutlineMenuUnfold, AiOutlineMenuFold, AiFillGithub } from 'react-icons/ai';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import MobileSection from './components/mobileMenu/MobileMenu';
import Profile from './components/profile/Profile';
import Search from './components/search/Search';
import { IHeaderProps } from './Header.interfaces';
import { AppBarStyled } from './Header.styles';

const sxMenuButton: SxProps<Theme> = {
  color: 'text.primary',
  bgcolor: 'grey.100',
  mx: 1
};
const sxNormalButton: SxProps<Theme> = {
  ml: 1,
  color: 'text.primary',
  bgcolor: 'grey.100',
  '&:hover': { bgcolor: 'grey.300', color: 'black' }
};

const sxAppBar: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  p: 0.5
};

const Header = ({ layoutState, colorState, breakpoints }: IHeaderProps) => {
  const { matchDownLG, matchDownMD } = breakpoints;
  const { isSideBarOpen, handlerSideBar } = layoutState;

  const headerContent = (
    <>
      <div>
        <IconButton
          disableRipple
          aria-label="open drawer"
          edge="start"
          color="secondary"
          sx={sxMenuButton}
          onClick={handlerSideBar}
        >
          {isSideBarOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
        </IconButton>
        {!matchDownMD && <Search />}
      </div>
      <Toolbar>
        <IconButton onClick={colorState.toggleColorMode} sx={sxNormalButton}>
          {colorState.currentColorMode === 'dark' ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
        </IconButton>
        <IconButton
          component={Link}
          href="https://github.com/javillegasna/Pocket-Safe-Web-Client"
          target="_blank"
          disableRipple
          color="secondary"
          title="Download Free Version"
          sx={sxNormalButton}
        >
          <AiFillGithub />
        </IconButton>
        {matchDownMD && <MobileSection />}
        {!matchDownMD && <Profile />}
      </Toolbar>
    </>
  );
  return (
    <>
      {matchDownLG ? (
        <AppBar sx={sxAppBar} elevation={0}>
          {headerContent}
        </AppBar>
      ) : (
        <AppBarStyled sx={sxAppBar} elevation={0} open={isSideBarOpen} theme={colorState.theme}>
          {headerContent}
        </AppBarStyled>
      )}
    </>
  );
};

export default Header;
