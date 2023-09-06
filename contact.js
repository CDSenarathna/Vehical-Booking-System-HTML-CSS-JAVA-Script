function allLetter(){

    var alL=/^[0-9]+$/;
    if(document.form.yn.value.match(alL))
    {

      alert("You can only enter characters for Your Name*");

      return false;
    }
   
}

function all_number()
{
  var aln= /^[a-zA-Z]+$/;
  if(document.form.pn.value.match(aln))
  {
    alert("You can only enter number for Phone Number*");

    return false;
    
  }
 
}




