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
      const jsonStr = response.match(/{.*}/s)?.[0];
      if (jsonStr) {
        const json = JSON.parse(jsonStr);
        return {
          text: json.text,
          user: 'agent',
          action: 'NONE',
        };
      }
      else {
        return {
          text: response,
          user: 'agent',
          action: 'NONE',
        };
      }
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
