import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import Sidebar from './sidebar';
import FluidInput from './fluid_input';
import FluidOutput from './fluid_output';

function MainLayout() {
  const [state, setState] = useState({});

  return (
    <Box sx={{ height: '100vh', display: 'flex', overflow: 'hidden' }}>
      <Grid container sx={{ height: '100%' }}>
        {/* Sidebar - left quarter of screen, full height */}
        <Grid item xs={3} sx={{ height: '100%' }}>
          <Sidebar />
        </Grid>

        {/* Right side - remaining 3/4 of screen */}
        <Grid item xs={9} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Fluid Input - top half */}
          <Box sx={{ height: '50%', overflow: 'auto' }}>
            <FluidInput />
          </Box>

          {/* Fluid Output - bottom half */}
          <Box sx={{ height: '50%', overflow: 'auto' }}>
            <FluidOutput />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainLayout;
