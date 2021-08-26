import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID RLBCRw37Dlnrd4RDw6RpklMa-lZB010FHiY564ff7Ww',
  },
});
