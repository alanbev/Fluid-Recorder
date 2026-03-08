import { useState, useEffect } from 'react';
import { Box, Paper, Typography, Grid, Alert } from '@mui/material';
import OutputSource from './output_source';
import OutputPresets from './output_presets';
import OutputVolume from './output_volume';
import { dispatchFluidData } from '../IO/dispatch';

function FluidOutput({ hospitalNumber }) {
  const [state, setState] = useState({});
  const [outputType, setOutputType] = useState(null);
  const [outputVolume, setOutputVolume] = useState(0);
  const [alertMessage, setAlertMessage] = useState('');

  // Reset form when patient changes
  useEffect(() => {
    setOutputType(null);
    setOutputVolume(0);
    setAlertMessage('');
  }, [hospitalNumber]);

  const getOutputObject = () => {
    const outputObject = {
      hospital_number: hospitalNumber,
      outputType: outputType,
      outputVolume: outputVolume
    };
    return outputObject;
  };

  const submitOutputData = async () => {
    // Validate source selection
    if (!outputType || outputType === '') {
      setAlertMessage('Please select an output type');
      return;
    }
    
    // Validate volume entry
    if (!outputVolume || outputVolume === 0) {
      setAlertMessage('Please enter a volume');
      return;
    }
    
    // Clear any previous alert
    setAlertMessage('');
    
    const outputObject = getOutputObject();
    try {
      const response = await dispatchFluidData('output', outputObject);
      // Reset form after successful submission
      setOutputType(null);
      setOutputVolume(0);
      return response;
    } catch (error) {
      console.error('Error submitting output data:', error);
      // Reset form even on error (for development without backend)
      setOutputType(null);
      setOutputVolume(0);
      // Uncomment this line if you want to show errors to users:
      // setAlertMessage('Submitted locally (backend not available)');
      throw error;
    }
  };

  return (
    <Paper sx={{ height: '100%', m: { xs: 1, md: 2 } }}>
      <Box sx={{ p: { xs: 1, md: 2 } }}>
        <Typography variant="h6" gutterBottom>Fluid Output</Typography>
        {alertMessage && (
          <Alert severity="warning" onClose={() => setAlertMessage('')} sx={{ mb: 2 }}>
            {alertMessage}
          </Alert>
        )}
        <Grid container spacing={{ xs: 1, md: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <OutputSource setOutputType={setOutputType} outputType={outputType} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OutputPresets outputType={outputType} setOutputType={setOutputType} />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <OutputVolume setOutputVolume={setOutputVolume} submitOutputData={submitOutputData} outputVolume={outputVolume} />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default FluidOutput;
