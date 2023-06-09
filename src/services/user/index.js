import getConfig from 'next/config';
const {publicRuntimeConfig} = getConfig();
const {BFF} = publicRuntimeConfig;


export const getUser = async (idUser) => {
    try {
      const url = `${BFF}/user/get-user?id=${idUser}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error.message);
    }
  };
  
  export const createNewUser = async (userData) => {
    try {
      const url = `${BFF}/user/create-new-user`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error.message);
    }
  };
