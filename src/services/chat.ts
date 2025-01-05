import api from './axios';
import {  Message } from '../types/chat';

export const chatApi = {
  createChat: async (initialMessage: string): Promise<Message> => {
    const result = await api.post(`/chat`, {
      text: initialMessage,
    });
    const response = result.data.data?.response;
    const json = JSON.parse(response);
    return {
      text: json.text,
      user: 'agent',
      action: 'NONE',
    };
  },
};