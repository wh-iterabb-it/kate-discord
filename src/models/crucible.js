const axios = require("axios").default;

/**
 * @name getDailyFinViz
 * @description get daily chart from finviz
 * @param {string} args - ticker symbol
 * @returns {Promise<import("axios").AxiosResponse<any>>}
 * */
function getDailyFinViz(args) {
  const apiUrl =
    "https://obiter-dictum-prod.herokuapp.com/chart/finviz/day?ticker=";
  const url = `${apiUrl}${args}`;
  const response = axios
    .get(url, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      // handle success
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  return response;
}

/**
 * @name getWeeklyFinViz
 * @description get weekly chart from finviz
 * @param {string} args - ticker symbol
 * @returns {Promise<import("axios").AxiosResponse<any>>}
 * */
function getWeeklyFinViz(args) {
  const apiUrl =
    "https://obiter-dictum-prod.herokuapp.com/chart/finviz/week?ticker=";
  const url = `${apiUrl}${args}`;
  const response = axios
    .get(url, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      // handle success
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  return response;
}

/**
 * @name getYearlyFinViz
 * @description get yearly chart from finviz
 * @param {string} args - ticker symbol
 * @returns {Promise<import("axios").AxiosResponse<any>>}
 **/
function getYearlyFinViz(args) {
  const apiUrl =
    "https://obiter-dictum-prod.herokuapp.com/chart/finviz/year?ticker=";
  const url = `${apiUrl}${args}`;
  const response = axios
    .get(url, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      // handle success
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  return response;
}

/**
 * @name getStockInfo
 * @description a currated list of stock info
 * @param {string} args - ticker symbol
 * @returns {Promise<import("axios").AxiosResponse<any>>}
 * */
function getStockInfo(args) {
  const apiUrl = "https://obiter-dictum-prod.herokuapp.com/stock/info?ticker=";
  const url = `${apiUrl}${args}`;
  const response = axios
    .get(url, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      // handle success
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  return response;
}

/**
 * @name getChartOne
 * @description get chart one
 * @param {string} args - ticker symbol
 * @returns {Promise<import("axios").AxiosResponse<any>>}
 * */
function getChartOne(args) {
  const apiUrl = "https://obiter-dictum-prod.herokuapp.com/chart/1?ticker=";
  const url = `${apiUrl}${args}`;
  const response = axios
    .get(url, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      // handle success
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  return response;
}

module.exports = {
  getWeeklyFinViz,
  getYearlyFinViz,
  getDailyFinViz,
  getStockInfo,
  getChartOne,
};
