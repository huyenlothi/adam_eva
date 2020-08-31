let Apple = function (weight) {
    this.weight = weight;
    this.decrease = function () {
        this.weight --;
    }
    this.isEmpty = function () {
        return (this.weight===0);
    }
    this.getWeight = function (){
        return this.weight;
    }
}