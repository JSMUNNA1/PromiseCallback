const a={
    name:'munna',
    class:'Ec1',
    roll:1
}

a.fun=function(){
    console.log(`${this.name},${this.class},${this.roll}`);
    
}


const b={
    name:'sivam',
    class:'EC2',
    roll:2
}

a.fun.call(b);
a.fun.apply(b);