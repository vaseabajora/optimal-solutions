import axios from 'axios';
import { constants } from '@/configs';

const closeApiUrl = 'https://api.close.com/api/v1';

const closeAxiosInstance = axios.create({
  baseURL: closeApiUrl,
  headers: {
    Authorization: `Basic ${btoa(constants.closeApiKey)}:`,
    'Content-Type': 'application/json'
  }
});

closeAxiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export function getPipelines() {
  return closeAxiosInstance.get('/pipeline');
}

export async function getOpportunitiesByPipelineId(pipelineId: string) {
  return closeAxiosInstance.get('/opportunity', { params: { pipeline_id: pipelineId } });
}
