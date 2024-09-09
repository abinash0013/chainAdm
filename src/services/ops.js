
import * as axios from 'axios'; 
const post = async (url = '', data, token=false) => {
    let tokenData = ''
    if(token){
        tokenData = 'Bearer '+token;
    }
    let response = await axios.post(url, data, { headers:  { Authorization: tokenData }});
    return response.data;
}
const postDataContent = async (url = '', data, token=false,  contentType) => {
    try {
        let tokenData = ''
        if(token){
            tokenData = 'Bearer '+token;
        }
        console.log('url, data', url, data, token, contentType)
        let response = await axios.post(url, data, { headers:  { Authorization: tokenData, contentType: contentType}} );
        return response.data;
    } catch (error) {
        console.log('error', error)
    }
   
}
const put = async (url = '', data, token=false) => {
    
    if(token){
        token = 'Bearer '+token;
    }
    let response = await axios.put(url, data, { headers: { Authorization: token }});
    
    return response.data;
}
const get = async (url = '',  token=false) => {
  
    if(token){
        token = 'Bearer '+token;
    }
   // console.log('response', url, { headers: { Authorization: token }})
    let response = await axios.get(url, { headers: { Authorization: token }});
    
    return response.data;
}

export async function downloadFile(fileUrl, data, token=false) {
   
    if(token){
        token = 'Bearer '+token;
    }
    axios.post(fileUrl, data,
        {responseType: 'blob', headers: { Authorization: token }}
    ).then(function (response) {
         
            const type = response.headers['content-type']
            const blob = new Blob([response.data], { type: type, encoding: 'UTF-8' })
            const link = document.createElement('a') 
            link.href = window.URL.createObjectURL(blob)
            link.download = data.fileName
            link.click()
        }
    );
}

const deleteData = async (url = '', data, token=false) => {
  
    if(token){
        token = 'Bearer '+token;
    }
   // console.log('response', url, { headers: { Authorization: token }})
    let response = await axios.delete(url, { headers: { Authorization: token }, data});
    
    return response.data;
}
export {
    post,
    get,
    put,
    postDataContent,
    deleteData
}