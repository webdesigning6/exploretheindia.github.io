function check(){
  var pass1= document.getElementById("exampleInputPassword1");
  var pass2=document.getElementById("exampleInputPassword2");
  if(pass1.value!=pass2.value){
    alert("the two password must be same!!");
  return false;
  }
}/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function outside() {
    //document.getElementById("mySharedown").className = "sharedown-content show";
    document.getElementById("mydown").classList.add("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.sharebtn')) {

        var registerdowns = document.getElementsByClassName("resigterdown-content");
        var i;
        for (i = 0; i < registerdowns.length; i++) {
            var outdown = registerdowns[i];
            if (outdown.classList.contains('show')) {
                outdown.classList.remove('show');
            }
        }
    }
}

document.getElementById("mydown").addEventListener('click',function(event){
    event.stopPropagation();
});
#