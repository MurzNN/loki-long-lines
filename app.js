const zeroPad = (num, places) => String(num).padStart(places, '0')

const genString = function (length) {
  return 'len '
    + zeroPad(length, 4) + ':'
    + '1234567890'.repeat(Math.floor(length / 10))
    + '1234567890'.substring(0, (length % 10));
}

const printLogs = function () {
  console.log('line 1');
  console.log('line 2');
  console.log(genString(16383));
  console.log(genString(16384));
  console.log(genString(16385));
  console.log(genString(16386));
  console.log(genString(18000));
  console.log('line fin');
}

printLogs();
setInterval(printLogs, 2000);