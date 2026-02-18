import { useState } from 'react';
import { Box, Drawer, List } from '@mui/material';

function Sidebar() {
  const [logged_in, setLogged_in] = useState(false);

  return (
    <Box>
      <Drawer variant="permanent">
        <List>
          {/* Sidebar Content */}
        </List>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
