import { useState } from 'react';
import { Box, Button, ButtonGroup, ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';

function OutputPresets({ outputType, setOutputType }) {
  const [state, setState] = useState({});
  const [stomaType, setStomaType] = useState('Ileostomy');
  const [drainType, setDrainType] = useState('');

  const handleStomaTypeChange = (event, newStomaType) => {
    if (newStomaType !== null) {
      setStomaType(newStomaType);
      setOutputType(newStomaType);
    }
  };

  const handleDrainTypeChange = (event, newDrainType) => {
    if (newDrainType !== null) {
      setDrainType(newDrainType);
      setOutputType(newDrainType);
    }
  };

  return (
    <Box sx={{ p: { xs: 1, md: 0 } }}>
      {['stoma', 'Ileostomy', 'Colostomy'].includes(outputType) && (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, mb: 2 }}>
          <Typography variant="subtitle2">Stoma Type</Typography>
          <ToggleButtonGroup
            value={stomaType}
            exclusive
            onChange={handleStomaTypeChange}
            aria-label="stoma type"
            orientation="vertical"
            sx={{
              width: { xs: '100%', sm: 'auto' },
              maxWidth: '200px',
              '& .MuiToggleButton-root': {
                fontSize: { xs: '0.875rem', md: '1rem' }
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
            <ToggleButton value="Ileostomy" aria-label="ileostomy">
              Ileostomy
            </ToggleButton>
            <ToggleButton value="Colostomy" aria-label="colostomy">
              Colostomy
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      )}
      {['drain', 'Drain1', 'Drain2', 'Drain3', 'Drain4'].includes(outputType) && (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, mb: 2 }}>
          <Typography variant="subtitle2">Choose Drain</Typography>
          <ToggleButtonGroup
            value={drainType}
            exclusive
            onChange={handleDrainTypeChange}
            aria-label="drain type"
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: { xs: 0.5, md: 1 },
              width: '100%',
              maxWidth: '200px',
              '& .MuiToggleButton-root': {
                fontSize: { xs: '0.875rem', md: '1rem' }
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
            <ToggleButton value="Drain1" aria-label="drain 1">
              1
            </ToggleButton>
            <ToggleButton value="Drain2" aria-label="drain 2">
              2
            </ToggleButton>
            <ToggleButton value="Drain3" aria-label="drain 3">
              3
            </ToggleButton>
            <ToggleButton value="Drain4" aria-label="drain 4">
              4
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      )}
      <ButtonGroup variant="outlined">
        {/* Output Presets Buttons */}
      </ButtonGroup>
    </Box>
  );
}

export default OutputPresets;
