import axios from "axios";
export default axios.create({
  baseURL: "http://loacalhost:8080/api",
  headers: {
    "content-type": " multipart/form-data",
  },
});

/*

export default getAxios=(url)=>{
    return axios.create({
        baseURL: url,
        headers: {
          "content-type": "application/json",
        },
    })
}

*/
