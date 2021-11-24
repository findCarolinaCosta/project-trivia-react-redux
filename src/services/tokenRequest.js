const tokenRequest = async () => {
  try {
    const response = await fetch('https://opentdb.com/api_token.php?command=request');
    const json = await response.json();
    return response.ok ? Promise.resolve(json.token) : Promise.reject(json);
  } catch (err) {
    console.log(err);
  }
};

export default tokenRequest;
