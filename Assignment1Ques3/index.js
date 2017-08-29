function for_each(array, some_action){
    var i = 0;
    while(i<array.length){

        some_action(array[i]);
        i = i+1;
    }
}
// Using a CBP function
var square = function(array_item){console.log(array_item*array_item)};
var array=[1,2,3,4,5,6,7];
for_each(array, square)
console.log("****************************************************");

function map_callback(input,callback)
{
   

    var i=0;
    while( i<input.length)
    {
        //input[i]=input[i]*input[i];
        input[i]=callback(input[i]);
        i+=1;
    }
    return arr;
}

var square=function (a) {
    return a*a;

}
var s=[1,2,3,4];
map_callback(s,square);
console.log(s);