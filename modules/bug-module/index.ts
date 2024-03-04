import BugModule from './src/BugModule';

export function bugTest(hex: string) {
  console.log(hex)
  let buffer = Buffer.from(hex, 'hex');
  console.log(buffer)
  let returned = BugModule.bugged({bug: new Uint8Array(buffer)});
  console.log(returned)
  let str =  returned ? Buffer.from(returned).toString('hex') : "NOTHING RETURNED"
  console.log(str);
  return str;
}

export function success(hex: string) {
  console.log(hex)
  let buffer = Buffer.from(hex, 'hex');
  console.log(buffer)
  let returned = BugModule.success(new Uint8Array(buffer));
  console.log(returned)
  let str =  returned ? Buffer.from(returned).toString('hex') : "NOTHING RETURNED"
  console.log(str);
  return str;
}