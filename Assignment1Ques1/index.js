
function setTimeoutSync(back, n) {
var now=new Date();
console.log(now);

while(new Date()-now<n){}
back(n);

}
function exceeded(n){console.log("the callback was done after  "+n+"   milliseconds");}
setTimeoutSync(exceeded,3000);

