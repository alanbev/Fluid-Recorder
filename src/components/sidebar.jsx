import { useState, useEffect } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import patientsData from '../pseudodata/patients.json';

function Sidebar({ setHospitalNumber }) {
  const [logged_in, setLogged_in] = useState(false);
  const [ward, setWard] = useState('');
  const [patient, setPatient] = useState('');

  useEffect(() => {
    setHospitalNumber(patient);
  }, [patient, setHospitalNumber]);

  const handleWardChange = (event) => {
    setWard(event.target.value);
    setPatient(''); // Reset patient when ward changes
  };

  const handlePatientChange = (event) => {
    setPatient(event.target.value);
  };

  // Get patients for the selected ward
  const selectedWard = patientsData.wards.find(w => w.ward_number === ward);
  const patients = selectedWard ? selectedWard.patients : [];

  return (
    <Box sx={{ 
      height: '100%', 
      p: { xs: 1.5, md: 2 },
      borderRight: { xs: 0, md: 1 },
      borderBottom: { xs: 1, md: 0 },
      borderColor: 'divider',
      bgcolor: 'background.paper'
    }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Select Ward</InputLabel>
        <Select
          value={ward}
          label="Select Ward"
          onChange={handleWardChange}
        >
          {patientsData.wards.map((wardItem) => (
            <MenuItem key={wardItem.ward_number} value={wardItem.ward_number}>
              {wardItem.ward_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }} disabled={!ward}>
        <InputLabel>Select Patient</InputLabel>
        <Select
          value={patient}
          label="Select Patient"
          onChange={handlePatientChange}
        >
          {patients.map((patientItem) => (
            <MenuItem key={patientItem.hospital_number} value={patientItem.hospital_number}>
              {patientItem.name} - {patientItem.hospital_number}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Sidebar;
