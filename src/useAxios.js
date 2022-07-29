import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

const useAxios = (url, card) => {
  const [response, setResponse] = useState([]);

  const getResponse = async (name) => {
    // if name is string, pokemon name passed in - add name to the url
    const data =
      typeof name === "string"
        ? await axios.get(`${url}${name}`)
        : await axios.get(`${url}`);

    setResponse((response) => [...response, { ...data.data, id: uuid() }]);
  };

  return [response, getResponse];
};

export default useAxios;
