function focusNav(id) {
    document.getElementById(id).classList.add("nav-show");

}
function unFocusNav(id) {
    document.getElementById(id).classList.remove("nav-show");
}
var index=0;
function save() {
    alert("Saved Successfully");
    var  fish=document.getElementById("name").value,
            pass=document.getElementById("password").value,
            telNum=document.getElementById("telNum").value,
            roomNum=document.getElementById("roomNum").value,
            istel=telNum.substring(0,4);

    if(fish !==""  &&  pass!==""  &&  telNum !== "" && "9989"===istel) {

            index++;
       var tr = "<tr class='text-white'>"+
                              "<td>"+index+"</td>"+
                              "<td>"+fish+"</td>"+
                              "<td>"+pass+"</td>"+
                              "<td>"+telNum+"</td>"+
                              "<td>"+roomNum+"</td>"+
                       "</tr>"

            document.getElementById("tbody").innerHTML+=tr;
            document.getElementById("name").innerHTML+='';
            document.getElementById("roomNum").innerHTML+='';
            document.getElementById("telNum").innerHTML+='9989';

}
    else {
        alert("Please fill in all!");
    }

}

function enterSave(e) {
    var keyCode=e.keyCode;
    if (keyCode===13){
        save();
    }

}
var span = document.getElementById('span');
function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    document.getElementById("hour").innerHTML=h;
    document.getElementById("min").innerHTML=m;
    document.getElementById("sec").innerHTML=s;
    span.textContent = h + ":" + m + ":" + s;
}
setInterval(time, 1000);

// function loade() {
//     alert("Welcome to Digital Window")
//
// }




//royxattan otish
//toldirilmadi , qizil xato
//5-6ta forma