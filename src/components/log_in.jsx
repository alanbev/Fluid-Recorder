import { Modal, Box, Button } from '@mui/material';

function Loginin({ setLoggedIn }) {
  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Modal
      open={true}
      aria-labelledby="login-modal"
      aria-describedby="login-modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '80%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Button 
          variant="contained" 
          size="large"
          onClick={handleLogin}
          sx={{ 
            fontSize: '1.5rem',
            padding: '1rem 3rem'
          }}
        >
          Log in
        </Button>
      </Box>
    </Modal>
  );
}

export default Loginin;
