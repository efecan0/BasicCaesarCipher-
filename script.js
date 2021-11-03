function encrypt(a){

    let number;
    let arr= [];

    for(let i =0 ; i <a.length; i++){
         number = a.charCodeAt(i);
         number+=3;
         let string = String.fromCharCode(number)
         arr.push(string)
    }


    return arr.join("")

}


function decrypt(b){

    let number;
    let arr= [];

    for(let i =0 ; i <b.length; i++){
         number = b.charCodeAt(i);
         number-=3;
         let string = String.fromCharCode(number)
         arr.push(string)
    }


    return arr.join("")
}



function printEncrypt(){


    const val = document.getElementById("text").value;

    document.getElementById("answer").innerHTML = encrypt(val);


}

function printDecrypt(){


    const val = document.getElementById("text").value;

    document.getElementById("answer").innerHTML = decrypt(val);


}
