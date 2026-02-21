import { useState } from 'react';
import { Box, ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';

// Import SVG icons
import drinkingIcon from '../icons.svg/drinking.svg';
import ngfeedIcon from '../icons.svg/ngfeed.svg';
import ivIcon from '../icons.svg/iv.svg';
import tpnIcon from '../icons.svg/tpn.svg';

function InputSource({ setInputType }) {
  const [inputType, setInputTypeLocal] = useState('');

  const handleInputTypeChange = (event, newInputType) => {
    if (newInputType !== null) {
      setInputType(newInputType);
      setInputTypeLocal(newInputType);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, p: { xs: 1, md: 2 } }}>
      <Typography variant="subtitle2" sx={{ alignSelf: 'flex-start' }}>Choose Input Type</Typography>
      <ToggleButtonGroup
        value={inputType}
        exclusive
        onChange={handleInputTypeChange}
        aria-label="input type"
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
        <ToggleButton value="drink" aria-label="drink">
          <img src={drinkingIcon} alt="drink" style={{ width: '100%', maxWidth: '80px', height: 'auto' }} />
        </ToggleButton>
        <ToggleButton value="ng" aria-label="ng feed">
          <img src={ngfeedIcon} alt="ng feed" style={{ width: '100%', maxWidth: '80px', height: 'auto' }} />
        </ToggleButton>
        <ToggleButton value="iv" aria-label="iv">
          <img src={ivIcon} alt="iv" style={{ width: '100%', maxWidth: '80px', height: 'auto' }} />
        </ToggleButton>
        <ToggleButton value="tpn" aria-label="tpn">
          <img src={tpnIcon} alt="tpn" style={{ width: '100%', maxWidth: '80px', height: 'auto' }} />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default InputSource;
