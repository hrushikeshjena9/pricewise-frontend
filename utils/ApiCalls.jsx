import axios from "axios";
import useSWR from "swr";

const env = process.env.NODE_ENV;

let apiUrl = "https://dev.maastrixdemo.com/pricewise/public/api/";
// let apiUrl = "http://192.168.1.51:8000/api/";
let authToken = "";

if (env === "production") {
  apiUrl = "https://dev.maastrixdemo.com/pricewise/public/api/";
}
// https://dev.maastrixdemo.com/pricewise/public/api/
export const PostData = async (
  url,
  data,
  payload,
  authToken = ""
) => {
  var formdata = new FormData();
  if (data) {
    Object.entries(data).forEach((entry) => {
      const [key, value] = entry;
      if (Array.isArray(value)) {
        value.forEach((v, index) => {
          if (typeof v === 'object' && v instanceof File) {
            formdata.append(`${key}[${index}]`, v);
          } else if (typeof v === 'object') {
            Object.entries(v).forEach(([k, val]) => {
              formdata.append(`${key}[${index}][${k}]`, val);
            });
          } else {
            formdata.append(`${key}[${index}]`, v);
          }
        });
      } else {
        formdata.append(key, value);
      }
    });
  }
  if (payload) formdata = payload;
  const result = await axios({
    method: "post",
    url: apiUrl + url,
    data: formdata,
    headers: {
      Authorization: authToken,
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      "X-CSRF-TOKEN": "pgXWzRKqTNxIIocMahWwadTwL36osQFia7SvxyQv"
    },
    validateStatus: function (status) {
      return status >= 200 && status < 300;
    },
  });

  return result.data;
};




export const axiosGet = async (url, authenticationToken = authToken) => {
  var config = {
    method: "get",
    url: apiUrl + url,
    headers: {
      Authorization: authenticationToken,
    },
  };

  const result = await axios(config);
  return result.data;
};
export const GetData = (url, shouldFetch = true) => {
  const config = {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  };
  return useSWR(shouldFetch ? url : null, axiosGet, config);
};
