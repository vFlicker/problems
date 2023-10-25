export const rot13 = (message) => {
  const input = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const output = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';

  return message.replace(/[a-z]/gi, c => output[input.indexOf(c)]);
}

console.log(rot13('Hello World!')); // Uryyb Jbeyq!
