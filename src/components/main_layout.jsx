import { useState } from 'react';
import { Box, Grid, Divider } from '@mui/material';
import Sidebar from './sidebar';
import FluidInput from './fluid_input';
import FluidOutput from './fluid_output';

function MainLayout() {
  const [state, setState] = useState({});
  const [hospitalNumber, setHospitalNumber] = useState('');
  console.log('Selected hospital number:', hospitalNumber);

  return (
    <Box sx={{ height: '100vh', width: '100vw', display: 'flex', overflow: 'hidden', margin: 0, padding: 0 }}>
      <Grid container spacing={0} sx={{ height: '100%', width: '100%', margin: 0, padding: 0 }}>
        {/* Sidebar - left third of screen, full height */}
        <Grid item xs={4} sx={{ height: '100%', minWidth: 280 }}>
          <Sidebar setHospitalNumber={setHospitalNumber} />
        </Grid>

        {/* Right side - remaining 2/3 of screen */}
        <Grid item xs={8} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Fluid Input - top half */}
          <Box sx={{ height: '50%', overflow: 'auto' }}>
            <FluidInput hospitalNumber={hospitalNumber} />
          </Box>

          <Divider sx={{ borderBottomWidth: 2 }} />

          {/* Fluid Output - bottom half */}
          <Box sx={{ height: '50%', overflow: 'auto' }}>
            <FluidOutput hospitalNumber={hospitalNumber} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainLayout;
