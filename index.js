function BoardMember(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training
}

BoardMember.prototype.veto = function(){
<<<<<<< HEAD
  return 'No, I must disagree'
=======
  return 'No, I must disagree'  
>>>>>>> 4a7fc43c953e4225b9df0030b548146f391666cf
}
BoardMember.prototype.approve = function(){
  return 'You can do that!'
}
BoardMember.prototype.doCharity = function(){
<<<<<<< HEAD
    return "I like to help people."
}
BoardMember.prototype.releasePressStatement = function(){
    return "You will see great things from Scuber."
}
BoardMember.prototype.sayHi = function(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
=======
    return "I like to help people."  
}
BoardMember.prototype.releasePressStatement = function(){
    return "You will see great things from Scuber."  
}
BoardMember.prototype.sayHi = function(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`  
>>>>>>> 4a7fc43c953e4225b9df0030b548146f391666cf
}
