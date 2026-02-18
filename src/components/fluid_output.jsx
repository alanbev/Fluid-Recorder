import { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';

function FluidOutput() {
  const [state, setState] = useState({});

  return (
    <Paper>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">Fluid Output</Typography>
        {/* Fluid Output Content */}
      </Box>
    </Paper>
  );
}

export default FluidOutput;
