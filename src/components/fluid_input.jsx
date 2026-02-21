import { useState } from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import InputSource from './input_source';
import InputPresets from './input_presets';
import InputVolume from './input_volume';
import { dispatchFluidData } from '../IO/dispatch';

function FluidInput({ hospitalNumber }) {
  const [state, setState] = useState({});
  const [inputType, setInputType] = useState('');
  const [presetVolume, setPresetVolume] = useState(0);
  const [inputVolume, setInputVolume] = useState(0);
  
  const getInputObject = () => {
    const inputObject = {
      hospital_number: hospitalNumber,
      inputType: inputType,
      inputVolume: inputVolume
    };
    return inputObject;
  };

  const submitInputData = async () => {
    const inputObject = getInputObject();
    try {
      const response = await dispatchFluidData('input', inputObject);
      return response;
    } catch (error) {
      console.error('Error submitting input data:', error);
      throw error;
    }
  };

  return (
    <Paper sx={{ height: '100%', m: { xs: 1, md: 2 } }}>
      <Box sx={{ p: { xs: 1, md: 2 } }}>
        <Typography variant="h6" gutterBottom>Fluid Input</Typography>
        <Grid container spacing={{ xs: 1, md: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <InputSource setInputType={setInputType} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <InputPresets setPresetVolume={setPresetVolume} />
          </Grid>
          <Grid item xs={12} sm={2} md={2}>
            <InputVolume presetVolume={presetVolume} setInputVolume={setInputVolume} submitInputData={submitInputData} />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default FluidInput;