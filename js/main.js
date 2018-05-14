//Rappel sur les conditions, les boucles, les objets, les arrays et les objets

var speed = 70; 

if(speed < 80){
    console.log('tu roules à la bonne vitesse')
} else if(speed < 100){
    console.log('Il faut ralentir un petit peu')
}else{
    console.log('Cest dangereux, tu roules beaucoup trop vite'); 
}

//Boucle while

var Yannick = 8; 

while(Yannick < 15 ){
    console.log(' Je sais faire une boucle jusqua'+ Yannick++);
} 

var Enfants = 6; 

do
 {
    console.log('Je connaissais pas cette boucle')
    Enfants++;
 }
 while(Enfants <=10); 

 //Boucle for 

 for(var yuss = 0; yuss <= 7; yuss++){
  console.log('je suis le '+yuss)
 }

 //Arrays (Tableaux)
 var fruits = ['pomme', 'banane','citron']
 console.log(fruits.length);//longueur du tableau
 console.log(fruits[1]); //Pour aller chercher l'index des éléments. Cela commence toujours par 0
 for(var i = 0; i< fruits.length; i++){
     console.log(fruits[i]); 
 }
//Pour rajouter un élement à l'array, utiliser la fonction push()
fruits.push('fraise'); 
fruits.push('pamplemousse','pêche','grenade')
console.log(fruits); 
//Pour enlever la dernière valeur de l'array, utiliser la fonction pop()
fruits.pop(); 
console.log(fruits); 
// la fonction slice prend en argmuents les emplacements du début et de fin du tableau que l'on veut retourner à l'intérieur d'un tableau.
var fruits2 = fruits.slice(1,3); 
//doit retourner un tableau avec banane, citron
console.log(fruits2); 
//Avec un seul argument, il commence à partir de cet index pour aller jusqu'à la fin du tableau. 
var fruits3 = fruits.slice(2); 
console.log(fruits3); 

//On peut metre des objets etc dans un array

var fruits = [
    pomme = {
        name : 'Golden', 
        market: 'Gennevilliers', 
        color: 'green'
    }, 
    banane = [
         'plantain', 
         'banane normale', 
    ], 

]; 

console.log(fruits)
//pour accéder à banane normale
console.log(fruits[1][1]); 

// Les objets en JavaScript

var dog = {
    name: "Gounggy", 
    color:"white", 
    age:4
}; 
console.log(dog.name);// notation pointée pour accéder aux propriétés de nos objets

//Boucle pour un objet

for(var prop in dog){
    console.log(dog[prop]); 
}
// Autre façon de creer des objets : les instancier à partir de la classe Object

var dog2 = new Object(); 
dog2.name = "Choupie";
dog2.color = "white"; 
dog2.age = 5; 
dog2.aboie = (number)=>{
    while(number>0){
        console.log(number.toString() + "Wouaf");
        number --; 
    }
    
};

dog2.aboie(7); 


// Fonctions constructeurs 
function Dog2(name,color,age){
    this.name = name; 
    this.color = color; 
    this.age = age;
    this.aboie = function(){
        console.log("Wouaf" + this.name)
    }
}// le this pointe vers l'instance qui est crée à partir du constructeur

var petitCaniche =  new Dog2("Jacky","Red", 5);

var grosPittbull = new Dog2("Rex","black",7); 

console.log(petitCaniche); 
console.log(grosPittbull); 
 
petitCaniche.aboie(); 