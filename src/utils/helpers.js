export function validateEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

export function validateName(fullName) {
  const regex = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
  return regex.test(fullName);
}

// minimum 5 words
export function validateMessage(msg) {
  const regex = /\s*\S+(?:\s+\S+){4,}/;
  return regex.test(msg);
}