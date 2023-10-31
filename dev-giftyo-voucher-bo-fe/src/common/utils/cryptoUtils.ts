import CryptoJS from 'crypto-js';

const AesKey = CryptoJS.enc.Utf8.parse(process.env.NEXT_PUBLIC_AES_KEY ?? '');
const AesIV = CryptoJS.enc.Utf8.parse('0000000000000000');

export const encrypt = (value: string): string => {
  try {
    const encrypt = CryptoJS.AES.encrypt(value, AesKey, {
      iv: AesIV,
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC,
    });

    return encrypt.ciphertext.toString();
  } catch (error) {
    console.error(error);
    return '';
  }
};

export const decrypt = (value: string): string => {
  try {
    const cipherParams = CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Utf8.parse(value),
    });

    const key = btoa(process.env.REACT_APP_AES_KEY ?? '');
    const decrypt = CryptoJS.AES.decrypt(value, CryptoJS.enc.Utf8.parse(key), {
      iv: AesIV,
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC,
    });

    return decrypt.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.log(error);
    return '';
  }
};
