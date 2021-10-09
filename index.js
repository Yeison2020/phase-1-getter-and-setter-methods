// Add your Circle class here


class Circle {
    constructor(num){
        this.num = num;

    }

    get radius(){
         return 2* Math.PI * this.radius
    }

    get diameter(){
        return this.num * 2
    }

    get circumference(){
        return 2 (Math.PI * this.num)
    }

    get area(){
        return Math.PI (this.num * this.num)
    }

    set diameter(num){
        return this.num * 2;
    }


    set circumference(num){
        return 2 (Math.PI * this.num)
    }

    set area(num){
        return Math.PI (this.num * thisnum)
    }



}


const  circle = new Circle(6);


circle.radius;

circle.diameter;

circle.circumference;

circle.area;


circle.diameter();
circle.circumference();
circle.area();