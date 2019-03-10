import axios from "axios";
import md5 from "md5";

const API = "https://uxcandy.com/~shapoval/test-task-backend/";

const convertObjectToFormData = (item) => {
  const form_data = new FormData();

  for ( let key in item ) {
    form_data.append(key, item[key]);
  }
  return form_data
};

const fixedEncodeURIComponent = (str) => {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16);
  });
};

axios.defaults.baseURL = API;
// axios.defaults.headers.common["Authorization"] = `Bearer beejee`;


const defaultHeaders = {
  method: "get",
  crossDomain: true
};

export function getTasks(page=1, sort="id", sortDirection="asc") {
  return axios({
    ...defaultHeaders,
    headers: {
      ...defaultHeaders.headers,
      "Content-Type": "multipart/form-data"
    },
    url: `?developer=AndrewShliama&page=${page}&sort_field=${sort}&sort_direction=${sortDirection}`
  })
}

export function addTask(Task) {
  const formData = convertObjectToFormData(Task);
  return axios({
    ...defaultHeaders,
    headers: {
      ...defaultHeaders.headers,
      "Content-Type": "multipart/form-data"
    },
    method: "post",
    url: "create?developer=AndrewShliama",
    data: formData
  })
}



export function editTask(id, status, text, test) {
  const testId = "9703";
  const testText = "text";
  const token = "beejee";
  const url = fixedEncodeURIComponent(`&text=${testText}&token=${token}`);
  const testMd = md5(url);
  debugger
  // const formData = convertObjectToFormData(Task);
  const fixedText = fixedEncodeURIComponent(text);
  const signature = md5(`email=${fixedEncodeURIComponent(test.email)}status=${status}&text=${fixedText}&username=${test.username}&token=beejee`);
  const formData = convertObjectToFormData(test);
  // const signature = md5(`status=0&text=SomeText&token=beejee`);
  return axios({
    ...defaultHeaders,
    headers: {
      ...defaultHeaders.headers,
      "Content-Type": "multipart/form-data",
    },
    method: "post",
    url: `edit/${id}?developer=AndrewShliama&${url}&signature=${testMd}`,
  })
}

