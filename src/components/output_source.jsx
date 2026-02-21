import { useState } from 'react';
import { Box, ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';

// Import SVG icons
import urinatingIcon from '../icons.svg/urinating..svg';
import catheterIcon from '../icons.svg/catheter.svg';
import vomitIcon from '../icons.svg/vomit.svg';
import ngdrainIcon from '../icons.svg/ngdrain.svg';
import drainIcon from '../icons.svg/drain.svg';
import stomaIcon from '../icons.svg/colostomy.svg';

function OutputSource({ setOutputType }) {
  const [outputType, setOutputTypeLocal] = useState('');

  const handleOutputTypeChange = (event, newOutputType) => {
    if (newOutputType !== null) {
      setOutputType(newOutputType);
      setOutputTypeLocal(newOutputType);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, p: { xs: 1, md: 2 } }}>
      <Typography variant="subtitle2" sx={{ alignSelf: 'flex-start' }}>Choose Output Type</Typography>
      <ToggleButtonGroup
        value={outputType}
        exclusive
        onChange={handleOutputTypeChange}
        aria-label="output type"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)' },
          gap: { xs: 0.5, md: 1 },
          width: '100%',
          maxWidth: '450px',
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
        <ToggleButton value="urine" aria-label="urine">
          <img src={urinatingIcon} alt="urine" style={{ width: '100%', maxWidth: '80px', height: 'auto' }} />
        </ToggleButton>
        <ToggleButton value="catheter" aria-label="catheter">
          <img src={catheterIcon} alt="catheter" style={{ width: '100%', maxWidth: '80px', height: 'auto' }} />
        </ToggleButton>
        <ToggleButton value="vomit" aria-label="vomit">
          <img src={vomitIcon} alt="vomit" style={{ width: '100%', maxWidth: '80px', height: 'auto' }} />
        </ToggleButton>
        <ToggleButton value="ng" aria-label="ng drain">
          <img src={ngdrainIcon} alt="ng drain" style={{ width: '100%', maxWidth: '80px', height: 'auto' }} />
        </ToggleButton>
        <ToggleButton value="drain" aria-label="drain">
          <img src={drainIcon} alt="drain" style={{ width: '100%', maxWidth: '80px', height: 'auto' }} />
        </ToggleButton>
        <ToggleButton value="stoma" aria-label="stoma">
          <img src={stomaIcon} alt="stoma" style={{ width: '100%', maxWidth: '80px', height: 'auto' }} />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default OutputSource;
