import React from 'react';
import { Theme, makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { LandscapeRounded } from '@material-ui/icons';
import { drawerWidth } from '../../../../common/shared/dimensions';

const useStyles = makeStyles((theme: Theme) => ({
  logoWrapper: {
    width: `calc(${drawerWidth}px - 48px)`, // 240 - 24*2
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      marginRight: -8
    }
  },
  landscapeIcon: {
    fill: "url(#landscapeGradient)",
    height: theme.spacing(4),
    width: theme.spacing(4)
  }
}));

const MainLogo: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box className={classes.logoWrapper}>

      <svg width="58" height="31" viewBox="0 0 58 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3248 9.84576C16.5717 12.5575 16.8109 12.6813 16.8219 12.6867C16.8234 12.6877 16.898 12.7262 22.1286 15.4296C19.0399 21.1802 17.0707 24.5834 16.2206 25.6394C14.946 27.2234 13.5556 28.4226 11.8455 29.1146C8.25034 30.8043 3.7811 30.8833 0.329834 28.7943L11.3248 9.84576Z" fill="url(#paint0_linear_18_4)" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M51.3094 12.0516C45.8277 2.46067 40.1612 -6.57544 33.652 6.6797C32.7616 8.38372 32.1125 11.6954 30.6586 11.6954V11.6786C29.2047 11.6786 28.5559 8.3669 27.6654 6.66287C21.156 -6.59227 15.4896 2.44385 10.0078 12.0348C9.59526 12.7581 9.19898 13.4484 8.85986 14.0484C21.4223 6.09577 20.3647 30.121 30.6586 30.3119V30.3287C40.9528 30.1378 39.8949 6.11259 52.4574 14.065C52.1185 13.4653 51.7222 12.775 51.3094 12.0516Z" fill="url(#paint1_linear_18_4)" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M51.9835 30.3287C55.124 30.3287 57.6701 27.7826 57.6701 24.6421C57.6701 21.5015 55.124 18.9554 51.9835 18.9554C48.843 18.9554 46.2969 21.5015 46.2969 24.6421C46.2969 27.7826 48.843 30.3287 51.9835 30.3287Z" fill="url(#paint2_linear_18_4)" />
        <defs>
          <linearGradient id="paint0_linear_18_4" x1="11161.3" y1="605.02" x2="5877.88" y2="5580.26" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8C43A2" />
            <stop offset="1" stop-color="#913F9E" />
          </linearGradient>
          <linearGradient id="paint1_linear_18_4" x1="11169.8" y1="0" x2="11169.8" y2="15528.3" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2196F3" />
            <stop offset="1" stop-color="#2B8EEB" />
          </linearGradient>
          <linearGradient id="paint2_linear_18_4" x1="2957.85" y1="18.9554" x2="2957.85" y2="5842.06" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2196F3" />
            <stop offset="1" stop-color="#2B8EEB" />
          </linearGradient>
        </defs>
      </svg>





      <LandscapeRounded classes={{ root: classes.landscapeIcon }} />
      <Typography variant="h5" noWrap>My Coins</Typography>
    </Box>
  )
}

export default MainLogo;
