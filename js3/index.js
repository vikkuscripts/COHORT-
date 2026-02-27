
// class Rectangle{
//   constructor( width , height, color){
//     this.width= width;
//     this.height= height;
//     this.color= color ;

//   }
//    area(){
//     const area = this.width * this.height;
//   return area;
//    }
  
//   paint(){
//     console.log (`paniting with color ${this.color}`);

//   }
 

// }
// const rect = new Rectangle(2, 4, "blue");
// const area = rect.area();
// rect.paint();
// console.log(area);



class Rectangle {
  constructor(width, height, color){

    this.width = width;
    this.height = height;
    this.color = color;
  }

  area(){
       const area = this.width * this.height ;
       return area;

  }
  paint(){
    console.log("paint in" + this.color)
  }
  
  
}

const rect = new Rectangle(2,3,"red") ;
const area= rect.area();
console.log(area);



















