const checkFetch = (response) => {
  if(!response.ok){
    console.log(JSON.stringify(response))
    throw Error('Error connecting to API, Error Code: ' + response)
  }
  return response;
}

export default checkFetch;