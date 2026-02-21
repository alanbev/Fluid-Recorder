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
    <Box sx={{ 
      minHeight: '100vh',
      height: '100vh',
      width: '100%',
      maxWidth: '100%',
      display: 'flex', 
      overflow: 'scroll', 
      margin: 0, 
      padding: 0 
    }}>
      <Grid container spacing={0} sx={{ height: '100%', width: '100%', margin: 0, padding: 0, maxWidth: '100%' }}>
        {/* Sidebar - full width on mobile, left side on desktop */}
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{ 
          height: { xs: 'auto', md: '100vh' },
          minHeight: { xs: '200px', md: '100vh' },
          overflow: { xs: 'visible', md: 'auto' },
          maxWidth: '100%',
          minWidth: '200px'
        }}>
          <Sidebar setHospitalNumber={setHospitalNumber} />
        </Grid>

        {/* Right side - full width on mobile, remaining space on desktop */}
        <Grid item xs={12} sm={12} md={9} lg={9.5} xl={10} sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          height: { xs: 'auto', md: '100vh' },
          maxWidth: '100%'
        }}>
          {/* Fluid Input - auto height on mobile, top half on desktop */}
          <Box sx={{ 
            height: { xs: 'auto', md: '50%' },
            minHeight: { xs: '250px', md: 'auto' },
            overflow: 'auto' 
          }}>
            <FluidInput hospitalNumber={hospitalNumber} />
          </Box>

          <Divider sx={{ borderBottomWidth: 2 }} />

          {/* Fluid Output - auto height on mobile, bottom half on desktop */}
          <Box sx={{ 
            height: { xs: 'auto', md: '50%' },
            minHeight: { xs: '250px', md: 'auto' },
            overflow: 'auto' 
          }}>
            <FluidOutput hospitalNumber={hospitalNumber} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainLayout;
