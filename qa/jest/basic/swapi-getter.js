const axios = require("axios");

const fetchData=(id)=>{
	return axios.get(`https://swapi.dev/api/people/${id}/`)
	.then((res)=>res.data.name)
	.catch((err)=>console.log(err))
}

module.exports = {fetchData};