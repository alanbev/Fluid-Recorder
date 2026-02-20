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
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, p: 2 }}>
      <Typography variant="subtitle2" sx={{ alignSelf: 'flex-start' }}>Choose Input Type</Typography>
      <ToggleButtonGroup
        value={inputType}
        exclusive
        onChange={handleInputTypeChange}
        aria-label="input type"
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 1,
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
          <img src={drinkingIcon} alt="drink" style={{ width: 80, height: 80 }} />
        </ToggleButton>
        <ToggleButton value="ng" aria-label="ng feed">
          <img src={ngfeedIcon} alt="ng feed" style={{ width: 80, height: 80 }} />
        </ToggleButton>
        <ToggleButton value="iv" aria-label="iv">
          <img src={ivIcon} alt="iv" style={{ width: 80, height: 80 }} />
        </ToggleButton>
        <ToggleButton value="tpn" aria-label="tpn">
          <img src={tpnIcon} alt="tpn" style={{ width: 80, height: 80 }} />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default InputSource;
