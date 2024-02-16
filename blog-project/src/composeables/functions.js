const checkFetch = (response) => {
  if(!response.ok){
    throw Error('Error connecting to API, Error Code: ' + response.status)
  }
  return response;
}

export default checkFetch;