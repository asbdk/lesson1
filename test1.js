let c = 300;
let obj = {a:1}
function func(a,b){
    let obj = {a:1}
    obj.a = 2;
    return a + b + c;
}

func(100,200);