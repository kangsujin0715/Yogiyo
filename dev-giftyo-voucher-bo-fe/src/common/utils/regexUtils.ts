export const isValidUserId = (data: string) => {
  return /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,12}$/.test(data);
};

export const isValidPassword = (data: string) => {
  const first =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+={}[\]|\\:;"'<>,.?~`-])(?!.*([!@#$%^&*()_+={}[\]|\\:;"'<>,.?~`-])\1)[a-zA-Z0-9!@#$%^&*()_+={}[\]|\\:;"'<>,.?~`-]{8,16}$/.test(
      data,
    );
  const second = /[₩\\￦&|/^;%"]/.test(data);

  return first && !second;
};

export const isValidEmail = (data: string) => {
  return /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
    data,
  );
};

export const isValidPhoneNumber = (data: string) => {
  const value = data.replaceAll('-', '');
  return /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/.test(value);
};
