function js_style()



{

text.style.fontSize = "30px";

 text.style.fontFamily = " 'Poppins', Arial, sans-serif";

  text.style.color = "#cfcfcf";

}



   function Enlarge()

{       

       var varname = document.getElementsByClassName("text1");

       for(let i = 0; i< varname.length; i++){

        varname[i].style.color = "#cfcfcf"; 

        varname[i].style.fontSize = "18px";

        varname[i].style.fontFamily = "Poppins, Arial";
        varname[i].style.lineheight = "1.6";
        

       }

}