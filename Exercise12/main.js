function show() {
    var re="";
    for (let i = 0; i < 15; i++) {
        if(i%2==0){
            re+=" is even, ";
        }else{
            re+=" is odd, ";
        }
    }
    re+="15 is odd";
    document.getElementById("display").innerHTML = re;
}