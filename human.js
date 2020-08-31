let Human = function (name,gender,weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.getName = function () {
        return this.name;
    }
    this.setName = function () {
        this.name = name;
    }
    this.getWeight = function () {
        return this.weight;
    }
    this.setWeight = function () {
        this.weight = weight;
    }
    this.isMale = function () {
        return (this.gender = gender);
    }
    this.getGender = function () {
        return this.gender;
    }
    this.setGender =  function (gender) {
        this.gender = gender;
    }
    this.speak = function (str) {
        console.log(str);
    }
    this.checkApple = function () {
        return Apple.getWeight();
    }
    this.eat = function (apple) {
        if (!apple.isEmpty()) {
            this.weight++;
            apple.weight--;
        }

    }

}