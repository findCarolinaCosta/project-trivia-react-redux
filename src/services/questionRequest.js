const questionsRequest = async (token) => {
  try {
    const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
    const json = await response.json();
    console.log(json);
    return response.ok ? Promise.resolve(json) : Promise.reject(json);
  } catch (err) {
    console.log(err);
  }
};

questionsRequest();

export default questionsRequest;
