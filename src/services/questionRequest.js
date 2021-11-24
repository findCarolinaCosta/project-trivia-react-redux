const questionsRequest = async (token) => {
  try {
    const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
    const { results } = await response.json();
    return response.ok ? Promise.resolve(results) : Promise.reject(results);
  } catch (err) {
    console.log(err);
  }
};

export default questionsRequest;
