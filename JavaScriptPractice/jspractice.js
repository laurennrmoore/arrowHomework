// var myName = "Lauren";
// document.write(myName);
// console.log(myName);


/*
var personAge = 18; 
  if (personAge >= 18 && personAge <= 30){
      document.write("You can go to the concert!")
  } else {
      document.write("You need to stay home :p");
  } */



// var links = document.
// getElementsByTagName('a');

// for(i = 1; i < links.length; i++) {
//     console.log('this is link number' + i)
// }
// document.write('All Links have been looped')


// for (i = 0; i < 10; i++){
//     //loop body
//         console.log(i);
//     if (i===7){
//         console.log('The loop is broken')
//         break;
//     }    
       
//     }

    for (i = 0; i < 10; i++) {
    


        // if (i === 5 || i === 3) {
        
        //     continue;
        // }
     
        // console.log(i);
     
        // if(i === 7) {
        //     console.log("The Loop is broken")
        //     break; 
            
        //             }
       
        //                     }
   // 
   
   
var links = document.getElementsByTagName('a');
 
for (i = 0; i < links.length; i++){
links[i].className = "Link" + i;    
}
