import axios from 'axios';

export const getLocation = async (latitude: number, longitude: number): Promise<string> => {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
    const response = await axios.get(url);
    const address = response.data.address;
    return address.city + ', ' + address.state;
};
