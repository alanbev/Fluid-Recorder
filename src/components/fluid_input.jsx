import { useState, useEffect } from 'react';
import { Box, Paper, Typography, Grid, Alert } from '@mui/material';
import InputSource from './input_source';
import InputPresets from './input_presets';
import InputVolume from './input_volume';
import { dispatchFluidData } from '../IO/dispatch';

function FluidInput({ hospitalNumber }) {
  const [state, setState] = useState({});
  const [inputType, setInputType] = useState(null);
  const [presetVolume, setPresetVolume] = useState(null);
  const [inputVolume, setInputVolume] = useState(0);
  const [alertMessage, setAlertMessage] = useState('');

  // Reset form when patient changes
  useEffect(() => {
    setInputType(null);
    setPresetVolume(null);
    setInputVolume(0);
    setAlertMessage('');
  }, [hospitalNumber]);
  
  const getInputObject = () => {
    const inputObject = {
      hospital_number: hospitalNumber,
      inputType: inputType,
      inputVolume: inputVolume
    };
    return inputObject;
  };

  const submitInputData = async () => {
    // Validate source selection
    if (!inputType || inputType === '') {
      setAlertMessage('Please select an input type');
      return;
    }
    
    // Validate volume entry
    if (!inputVolume || inputVolume === 0) {
      setAlertMessage('Please enter a volume');
      return;
    }
    
    // Clear any previous alert
    setAlertMessage('');
    
    const inputObject = getInputObject();
    try {
      const response = await dispatchFluidData('input', inputObject);
      // Reset form after successful submission
      setInputType(null);
      setPresetVolume(null);
      setInputVolume(0);
      return response;
    } catch (error) {
      console.error('Error submitting input data:', error);
      // Reset form even on error (for development without backend)
      setInputType(null);
      setPresetVolume(null);
      setInputVolume(0);
      // Uncomment this line if you want to show errors to users:
      // setAlertMessage('Submitted locally (backend not available)');
      throw error;
    }
  };

  return (
    <Paper sx={{ height: '100%', m: { xs: 1, md: 2 } }}>
      <Box sx={{ p: { xs: 1, md: 2 } }}>
        <Typography variant="h6" gutterBottom>Fluid Input</Typography>
        {alertMessage && (
          <Alert severity="warning" onClose={() => setAlertMessage('')} sx={{ mb: 2 }}>
            {alertMessage}
          </Alert>
        )}
        <Grid container spacing={{ xs: 1, md: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <InputSource setInputType={setInputType} inputType={inputType} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <InputPresets setPresetVolume={setPresetVolume} presetVolume={presetVolume} />
          </Grid>
          <Grid item xs={12} sm={2} md={2}>
            <InputVolume presetVolume={presetVolume} setInputVolume={setInputVolume} submitInputData={submitInputData} inputVolume={inputVolume} />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default FluidInput;