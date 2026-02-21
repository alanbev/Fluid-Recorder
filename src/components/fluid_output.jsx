import { useState } from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import OutputSource from './output_source';
import OutputPresets from './output_presets';
import OutputVolume from './output_volume';
import { dispatchFluidData } from '../IO/dispatch';

function FluidOutput({ hospitalNumber }) {
  const [state, setState] = useState({});
  const [outputType, setOutputType] = useState('');
  const [outputVolume, setOutputVolume] = useState(0);

  const getOutputObject = () => {
    const outputObject = {
      hospital_number: hospitalNumber,
      outputType: outputType,
      outputVolume: outputVolume
    };
    return outputObject;
  };

  const submitOutputData = async () => {
    const outputObject = getOutputObject();
    try {
      const response = await dispatchFluidData('output', outputObject);
      return response;
    } catch (error) {
      console.error('Error submitting output data:', error);
      throw error;
    }
  };

  return (
    <Paper sx={{ height: '100%', m: { xs: 1, md: 2 } }}>
      <Box sx={{ p: { xs: 1, md: 2 } }}>
        <Typography variant="h6" gutterBottom>Fluid Output</Typography>
        <Grid container spacing={{ xs: 1, md: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <OutputSource setOutputType={setOutputType} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OutputPresets outputType={outputType} setOutputType={setOutputType} />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <OutputVolume setOutputVolume={setOutputVolume} submitOutputData={submitOutputData} />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default FluidOutput;
