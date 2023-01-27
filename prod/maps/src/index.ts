// when we just use the export keyword, we receive that with curly braces
// so user is essentailly the exported class
// if default keyword is used then you don't need curly braces
7// shouldnt use default in typescript really
/// <reference types="@types/google.maps" />
import { User, red } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company();

console.log(user);
console.log(company);