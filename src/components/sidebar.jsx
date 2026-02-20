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
      p: 2,
      borderRight: 1, 
      borderColor: 'divider',
      bgcolor: 'background.paper'
    }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="ward-select-label">Select Ward</InputLabel>
        <Select
          labelId="ward-select-label"
          id="ward-select"
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
        <InputLabel id="patient-select-label">Select Patient</InputLabel>
        <Select
          labelId="patient-select-label"
          id="patient-select"
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
