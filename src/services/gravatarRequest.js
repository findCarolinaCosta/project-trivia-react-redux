import md5 from 'crypto-js/md5';

function convertEmailToHash(email) {
  const URL = 'https://www.gravatar.com/avatar/';
  const hash = md5(email).toString();
  const completeLink = `${URL}${hash}`;

  return completeLink;
}

export default convertEmailToHash;
