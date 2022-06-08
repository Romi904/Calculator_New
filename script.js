console.log('Working');
function owner(){
    alert('Creator- Romijul LAskar,\n copyrights@romijul_2022.');
}
let x=document.getElementById('clr');
x.addEventListener('click',clear);
function clear(){
    var t=document.getElementsByTagName('input');
    t[0].value="";
}
function add(s){
    document.getElementById('dis').value+=s;
}
function solve(){
    var z=document.getElementById('dis').value;
    var tt=eval(z);
    document.getElementById('dis').value=tt;
}
function del(){
    var u=document.getElementById('dis');
    var p=u.value.toString();
    var cd=p.slice(0,-1);
    u.value=cd;
}