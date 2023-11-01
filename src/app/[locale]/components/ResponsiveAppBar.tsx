
"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { useTranslations } from 'next-intl';



const ResponsiveAppBar = () => {

  const t = useTranslations('AppBar');

  let navMap = new Map<string, string>([
    [t('find'), "/"],
    [t('shelter'), "/shelter"],
    ['FAQ', "/faq"],
    ['Blog', "/blog"],
    [t('about'), "/about"],
    [t('contact'), "/contact"],
  ]);

  const pages = [t('find'), t('shelter'), 'FAQ', 'Blog', t('contact'), t('about')];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box component="img" height="4%" width="4%" sx={{ display: { xs: 'none', md: 'flex' } }} src="/images/PawsomeLogo.png" />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex', flexGrow: 1 },
              fontFamily: 'monospace',
              fontWeight: 'bold',
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PawsomeSearch
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button

                key={page}
                sx={{ my: 2, color: 'white', display: 'block', textAlign: 'center' }}
                component={Link} href={navMap.get(page) || "/"}
              >
                {page}
              </Button>
            ))
            }
          </Box>



          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem component={Link} href={navMap.get(page) || "/"} key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box component="img" height="12%" width="12%" sx={{ display: { xs: 'flex', md: 'none' } }} src="/images/PawsomeLogo.png" />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 'bold',
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PawsomeSearch
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;