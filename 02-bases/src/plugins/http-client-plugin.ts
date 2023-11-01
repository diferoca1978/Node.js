import axios from 'axios';

//$ Addapter pattern (wrapper) of FetchAPI with http verbs

// const httpClientPlugin = {
//   get: async (url) => {
//     const res = await fetch(url);
//     const data = await res.json();

//     return data;
//   },
//   post: async (url, body) => {},
//   put: async (url, body) => {},
//   delete: async (url) => {},
// };

//$ Addapter pattern (wrapper) with AXIOS third party module

export const httpClientPlugin = {
  get: async (url: string) => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (e) {
      console.log({ message: `have been an error ${e} ` });
    }
  },
  post: async (url: string, body: any) => {},
  put: async (url: string, body: any) => {},
  delete: async (url: string) => {},
};
