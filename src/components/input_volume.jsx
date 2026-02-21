import { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

function InputVolume({ presetVolume, setInputVolume, submitInputData }) {
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    setVolume(presetVolume);
    setInputVolume(presetVolume);
  }, [presetVolume, setInputVolume]);

  const handleVolumeChange = (event) => {
    const newVolume = Number(event.target.value);
    setVolume(newVolume);
    setInputVolume(newVolume);
  };

  const handleClear = () => {
    setVolume(0);
    setInputVolume(0);
  };

  const handleSubmit = async () => {
    try {
      await submitInputData();
      console.log('Fluid input data sent successfully');
    } catch (error) {
      console.error('Failed to send fluid input data:', error);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, p: { xs: 1, md: 2 } }}>
      <Typography variant="subtitle2">Volume (ml)</Typography>
      <TextField
        type="number"
        value={volume}
        onChange={handleVolumeChange}
        variant="outlined"
        inputProps={{ min: 0 }}
        sx={{ width: { xs: '100%', sm: '150px' }, maxWidth: '200px' }}
      />
      <Button 
        variant="outlined" 
        onClick={handleClear}
        sx={{ width: { xs: '100%', sm: '150px' }, maxWidth: '200px' }}
      >
        Clear
      </Button>
      <Button 
        variant="contained" 
        onClick={handleSubmit}
        sx={{ 
          width: { xs: '100%', sm: '150px' },
          maxWidth: '200px',
          backgroundColor: '#ffcccb',
          color: '#000',
          '&:hover': {
            backgroundColor: '#ffb3b3'
          }
        }}
      >
        Send Fluid Input to EPR
      </Button>
    </Box>
  );
}

export default InputVolume;
