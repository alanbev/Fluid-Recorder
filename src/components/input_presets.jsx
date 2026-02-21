import { useState } from 'react';
import { Box, Button, ButtonGroup, ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';
import volumes from '../settings/volumes.json';

// Import SVG icons
import cupIcon from '../icons.svg/cup.svg';
import glassIcon from '../icons.svg/glass.svg';
import jugIcon from '../icons.svg/jug.svg';

function InputPresets({ setPresetVolume }) {
  const [state, setState] = useState({});
  const [presetVolume, setPresetVolumeLocal] = useState('');

  const handlePresetVolumeChange = (event, newPresetVolume) => {
    if (newPresetVolume !== null) {
      setPresetVolumeLocal(newPresetVolume);
      setPresetVolume(newPresetVolume);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, p: { xs: 1, md: 0 } }}>
      <Typography variant="subtitle2">Choose Preset Volume</Typography>
      <ToggleButtonGroup
        value={presetVolume}
        exclusive
        onChange={handlePresetVolumeChange}
        aria-label="preset volume"
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: { xs: 0.5, md: 1 },
          width: '100%',
          maxWidth: '300px',
          '& .MuiToggleButton-root': {
            padding: { xs: '4px', md: '8px' }
          },
          '& .MuiToggleButton-root.Mui-selected': {
            backgroundColor: 'green',
            color: 'white',
            '&:hover': {
              backgroundColor: 'darkgreen',
            }
          }
        }}
      >
        <ToggleButton value={volumes.cup} aria-label="cup">
          <img src={cupIcon} alt="cup" style={{ width: '100%', maxWidth: '60px', height: 'auto' }} />
        </ToggleButton>
        <ToggleButton value={volumes.glass} aria-label="glass">
          <img src={glassIcon} alt="glass" style={{ width: '100%', maxWidth: '60px', height: 'auto' }} />
        </ToggleButton>
        <ToggleButton value={volumes.jug} aria-label="jug">
          <img src={jugIcon} alt="jug" style={{ width: '100%', maxWidth: '60px', height: 'auto' }} />
        </ToggleButton>
        <ToggleButton value={volumes['500ml']} aria-label="500ml">
          <Typography fontSize={{ xs: '0.8rem', md: '1rem' }}>500ml</Typography>
        </ToggleButton>
        <ToggleButton value={volumes['1l']} aria-label="1l">
          <Typography fontSize={{ xs: '0.8rem', md: '1rem' }}>1L</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
      <ButtonGroup variant="outlined">
        {/* Input Presets Buttons */}
      </ButtonGroup>
    </Box>
  );
}

export default InputPresets;
