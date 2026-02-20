import axios from 'axios';
import endpoints from '../settings/endpoints.json';

/**
 * Dispatches fluid data to the appropriate endpoint
 * @param {string} type - Either "input" or "output"
 * @param {object} data - The data object to send
 * @returns {Promise} The response from the endpoint
 */
export const dispatchFluidData = async (type, data) => {
  try {
    let endpoint;
    
    if (type === 'input') {
      endpoint = endpoints.submit_fluid_input;
    } else if (type === 'output') {
      endpoint = endpoints.submit_fluid_output;
    } else {
      throw new Error(`Invalid type: ${type}. Must be "input" or "output"`);
    }

    const response = await axios.post(endpoint, data);
    return response;
  } catch (error) {
    console.error(`Error dispatching ${type} data:`, error);
    throw error;
  }
};

export default dispatchFluidData;
