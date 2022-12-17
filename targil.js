
/*1*/
/*
function isWholeNumber(x)
{
    if (typeof(x)=='number' & x%1==0){
        return true;
    }
    else
    {
        return false;
    }

}
console.log(isWholeNumber(x));
*/

/*2*/
/*
function greet(name, where){
if(where=='console')
{
    console.log('Hello '+name);
}
else if(where=='alert')
{
    alert('Hello '+name);
}
else{
    document.write('Hello '+name);
}
}


/*3
function max(...args)
{
let max=-Infinity;
for(let arg of args){
    if(arg[i]>max){
        max=args[i];
    }
}
}
*/


 /*
function stringTrim(str){
    let start;
    let end;
    let str1="";
   for (let i=0; i<str.length; i++){
    if(str[i]!='/t' && str[i]!='/n' && str[i]!=' '){
        start=i;
    }
   }
   for (let j=str.length; j>0; j--){
    if(str[j]!='/t' && str[j]!='/n'&& str[j]!=' '){
        end=j;
    }
   }
   for(let z=start; z<end; z++){
    str1+=str[z];
   }
return str1;
}
let s='     yyyyy    yyyyy   ';
console.log(stringTrim(s));
console.log(stringTrim(s));
console.log(stringTrim(s));
*/

/*8
function stringReverse(str){
    let rstr=""
    for(let i=str.length-1; i>=0; i--){
        rstr+=str[i];
    }
    return rstr;
}
console.log(stringReverse('abcd'));
*/

function stringSubstring(str, start, end){
    let str1="";
    for(let i=start; i<end; i++){
        str1+=str[i];
    }
    return str1;
}
let str3='tamarim';
console.log(stringSubstring(str3, 1, 4));
console.log(str3.substring(1,4));


/*10*/
function stringIncludes(str1, str2){
    if(str2.length > str1.length){
        alert('Error');
    }
    for(let i=0; i<str1.length; i++){
        if(str2[i]==str1[i]
            )
    }
}