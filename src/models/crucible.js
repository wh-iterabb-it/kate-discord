const axios = require("axios").default;
const fs = require('fs');
const { writeFile } = fs.promises;
const request = require('request');

const file = 'catchart.png';
const fileReadStream = fs.createReadStream(file);


fileReadStream.on('finish', () => {
	fs.unlink(file);
});


function getDailyFinViz(args) {
	const apiUrl = "https://obiter-dictum-prod.herokuapp.com/chart/finviz/day?ticker=";
	const url = `${apiUrl}${args}`;
	const response =  axios.get(url, {
			method: "get",
			headers: { "Content-Type": "application/json" },
		})
		.then((response) => {
			// handle success
			return response
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
	return response;
}

function getWeeklyFinViz(args) {
	const apiUrl = "https://obiter-dictum-prod.herokuapp.com/chart/finviz/week?ticker=";
	const url = `${apiUrl}${args}`;
	const response =  axios.get(url, {
			method: "get",
			headers: { "Content-Type": "application/json" },
		})
		.then((response) => {
			// handle success
			return response
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
	return response;
}

function getYearlyFinViz(args) {
	const apiUrl = "https://obiter-dictum-prod.herokuapp.com/chart/finviz/year?ticker=";
	const url = `${apiUrl}${args}`;
	const response =  axios.get(url, {
			method: "get",
			headers: { "Content-Type": "application/json" },
		})
		.then((response) => {
			// handle success
			return response
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
	return response;
}


function getStockInfo(args) {
	const apiUrl = "https://obiter-dictum-prod.herokuapp.com/stock/info?ticker=";
	const url = `${apiUrl}${args}`;
	const response =  axios.get(url, {
			method: "get",
			headers: { "Content-Type": "application/json" },
		})
		.then((response) => {
			// handle success
			return response
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
	return response;
}

function getChartOne(args) {
	const apiUrl = "https://obiter-dictum-prod.herokuapp.com/chart/1?ticker=";
	const url = `${apiUrl}${args}`;
	const response =  axios.get(url, {
			method: "get",
			headers: { "Content-Type": "application/json" },
		})
		.then((response) => {
			// handle success
			return response
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
	return response;
}



async function getJSONResponse(body) {
	let fullBody = '';

	for await (const data of body) {
		fullBody += data.toString();
	}
	return JSON.parse(fullBody);
}
function writeToFile(filePath, arr) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath, {end: true});
    for (const row of arr) {
      file.write(row + "\n");
    }
    file.end();
    file.on("finish", () => { resolve(true); }); // not sure why you want to pass a boolean
    file.on("error", reject); // don't forget this!
  });
}

function downloadFromFromUrl (url, filename, callback = () => { console.log('done') }) {
	try {
			request.head(url, async function(err, res, body){
			console.log('content-type:', res.headers['content-type']);
			console.log('content-length:', res.headers['content-length']);

			await request({ url: url, resolveWithFullResponse: true }).pipe(await writeToFile(filename));
		}).end();
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	getWeeklyFinViz,
	getYearlyFinViz,
	getDailyFinViz,
	getJSONResponse,
	getStockInfo,
	getChartOne,
	downloadFromFromUrl,
	fileReadStream,
	file
}
