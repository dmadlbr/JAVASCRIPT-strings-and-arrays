// Number Hide

const phone = 9874563210;
const pString = phone.toString();
const pStart = pString.slice(0,2);
const pEnd = pString.slice(-3);
const hidPhone = pStart  + "*****" + pEnd;
console.log(hidPhone);

// Email Hide

const e = "abcdedgryi@example.com" ;
const eSplit = e.split('@');
console.log(eSplit)
const eName = eSplit[0];
const eDomain = eSplit[1];
const username = eName.slice(0,2)
const userHid = username + '********';
const hidEm = userHid + '@' + eDomain;
console.log(hidEm)

// Reversing one element by one

const str = 'Health is Wealth';
const strSplit = str.split(' ');
const res = [];
for(i=0;i<strSplit.length;i++){
    const rev = strSplit[i].split("").reverse().join('');
    res.push(rev)
}
console.log(res.join(' '))
