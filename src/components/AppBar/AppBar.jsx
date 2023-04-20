import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Toolbar } from '@mui/material';
import { useAuth } from 'hooks';
import { Navigation } from '../Navigation'
import { AuthNav } from '../AuthNav';
import { UserMenu } from 'components/UserMenu';

export const Header = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    >
                       <Navigation/>
                    </Box>
                    {isLoggedIn ? <UserMenu /> : <AuthNav />}

                </Toolbar>
            </AppBar>

        </Box>
    );
};