var accord = document.getElementsByClassName("accordion");
var i;

for(i = 0; i < accord.length; i++){
    accord[i].addEventListener("click", function(){
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none";
        }//if
        else{
            panel.style.display = "block";
        }//else
    });
}//for