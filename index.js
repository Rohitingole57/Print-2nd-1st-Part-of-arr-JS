//Print the second half of the EVEN array

var names = ["a","b","c","d","e","f","g","h"];
var start = names.length /2;
for (var i=start; i<=names.length; i++)
{
    console.log(names[i]);
}


//Print the second half of the ODD array
var names = ["a","b","c","d","e","f","g","h","i"];
var start = (names.length-1) /2;
for (var i=start; i<=names.length; i++)
{
    console.log(names[i]);
}

//Print the second half of the EVEN & ODD array
var names = ["a","b","c","d","e","f","g","h"];
var start = 0;
if(names.length % 2 ==0 ){
    start = names.length /2;
} else {
    start = (names.length-1) / 2;
}

for (var i=start; i<=names.length; i++)
{
    console.log(names[i]);
}

// print the first half of the array

var names = ["a","b","c","d","e","f","g","h"];
var end = 0;
if(names.length % 2 ==0 ){
    end = names.length /2;
} else {
    end = (names.length-1) / 2;
}

for (var i=0; i<end; i++)
{
    console.log(names[i]);
}
