import fetch from 'isomorphic-fetch';

export default async function post(url,method,params) {
	let response = await fetch(url,{method: method, body: JSON.stringify(params)});
	let data;
	if (response.status >= 200 && response.status < 300) {
		data = await response.json();
    }else{
        data =  {"retCode":false,"retMesg":"服务器异常("+response.status+")"};
    }
	return data;
}


