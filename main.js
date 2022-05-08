
  
  var Image = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
  ];
  var E = 0 ;
  function Next() {
    document.getElementById("Water2").src = Image[E];
  E++;
   if(E==6)
    {  
    E=0;
    } 
   
  }