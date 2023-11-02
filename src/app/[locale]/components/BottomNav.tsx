import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Facebook, Instagram } from '@mui/icons-material';
import { Link } from '@mui/material';
import NextLink from 'next/link';

export const BottomNav = () => {
    return (
        <>
            <Box sx={{ pb: '100px' }} />
            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar sx={{ justifyContent: 'space-evenly' }}>
                    <Link sx={{ p: 1 }} color="inherit" component={NextLink} href={"/imprint"}>Imprint</Link>

                    <Link sx={{ textAlign: 'center', p: 1 }} color="inherit" component={NextLink} href={"/dataprotection"}>Data protection</Link>

                    <Link className="cky-banner-element" sx={{ textAlign: 'center', p: 1 }} color="inherit" component={NextLink} href="#">Cookies</Link>

                    {/* <Link href="#"
                        color="inherit"
                        sx={{ textAlign: 'center', p: 1 }}
                        onClick={() => {
                            (window as any).displayPreferenceModal(); return false;;
                        }} >Cookie Preferences</Link> */}
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton color="inherit" target="_blank" href="https://www.facebook.com/pawsomesearch">
                        <Facebook />
                    </IconButton>
                    <IconButton color="inherit" target="_blank" href="https://www.instagram.com/pawsomesearch/">
                        <Instagram />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    );
}


export default BottomNav