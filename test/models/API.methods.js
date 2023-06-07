import testData from '../helpers/test-data';

export const createNewUserAPI = async (domain) => {
  const axios = require('axios');
  const FormData = require('form-data');
  const data = new FormData();
  data.append('task', 'create_temp_user_in_domain');
  data.append('domain', domain);

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: testData.webcheckAPI,
    headers: {
      Authorization: 'Bearer aee3ae42d7bd410ed815e65215fc7e8f',
      ...data.getHeaders(),
    },
    data: data,
  };

  try {
    const response = await axios(config);
    let user = JSON.stringify(response.data.massage.user);
    let password = JSON.stringify(response.data.massage.password);
    user = user.replace(/"/g, '');
    password = password.replace(/"/g, '');
    return { user, password };
  } catch (error) {
    console.log(error);
    throw error;
  }
};