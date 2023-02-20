import { Theme } from '@emotion/react';
import { AppBar, Box, IconButton, Link, PaletteMode, Toolbar } from '@mui/material';
import { SxProps } from '@mui/material/styles';
import { AiOutlineMenuUnfold, AiOutlineMenuFold,AiFillGithub } from 'react-icons/ai';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import MobileSection from './components/mobileMenu/MobileMenu';
import Search from './components/search/Search';
interface IHeaderProps {
  isSideBarOpen: boolean;
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  colorMode: {
    toggleColorMode: () => void;
    currentColorMode: PaletteMode;
  };
  breakpoints: {
    matchesXs: boolean;
    matchDownMD: boolean;
  };
}

const Header = ({ isSideBarOpen, colorMode, breakpoints }: IHeaderProps) => {
  const {matchesXs} = breakpoints
  const sxIconButton: SxProps<Theme> = {
    color: 'text.primary',
    bgcolor: 'grey.100',
    ml: { xs: 0, lg: -2 }
  };
  return (
    <AppBar elevation={0}>
      <Toolbar>
        <IconButton
          disableRipple
          aria-label="open drawer"
          edge="start"
          color="secondary"
          sx={sxIconButton}
        >
          {isSideBarOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
        </IconButton>
        {!matchesXs && <Search />}
        {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {colorMode.currentColorMode === 'dark' ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
        </IconButton>
        <IconButton
          component={Link}
          href="https://github.com/javillegasna/Pocket-Safe-Web-Client"
          target="_blank"
          disableRipple
          color="secondary"
          title="Download Free Version"
          sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
        >
          <AiFillGithub />
        </IconButton>
        {matchesXs && <MobileSection />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
