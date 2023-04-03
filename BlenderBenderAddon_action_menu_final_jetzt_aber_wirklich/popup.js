
  a = document.getElementById("actionclickbtns");
  logo = document.getElementById("logo");

  clicked = false;

  a1 = document.getElementById("logo_action");
  a2 = document.getElementById("logo_action2");
  a3 = document.getElementById("logo_action3");

  logo.addEventListener("click", function(){
    if(!clicked){
      a.style = "opacity: 1;";

      clicked = true;
    }
    else{
      a.style = "opacity: 0;";
      clicked = false;
    }
  });
  a1.addEventListener("click", function(){
    if(clicked){
      alert("You clicked help!")
    }
  });
  a2.addEventListener("click", function(){
    if(clicked){
      alert("You clicked settings!")
    }
  });






  
