import { useState } from 'react';
import { Box, Slider, Typography } from '@mui/material';

function OutputVolume() {
  const [volume, setVolume] = useState(50);

  return (
    <Box sx={{ width: '100%' }}>
      <Typography gutterBottom>Output Volume</Typography>
      <Slider
        value={volume}
        onChange={(e, newValue) => setVolume(newValue)}
        aria-label="Output Volume"
      />
    </Box>
  );
}

export default OutputVolume;
