import api from './axios';
import {  Message } from '../types/chat';

export const chatApi = {
  createChat: async (initialMessage: string): Promise<Message> => {
    try {
      const result = await api.post(`/chat`, {
        text: initialMessage,
        name: "Daisy 9000",
      });
      const response = result.data.data?.response;
      const json = JSON.parse(response);
      return {
        text: json.text,
        user: 'agent',
        action: 'NONE',
      };
    }
    catch (err) {
      console.log(err);
    }

    return {
      text: "Something went error, please try again.",
      user: 'agent',
      action: 'NONE',
    };
  },
};
