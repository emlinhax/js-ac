var v0 = Reflect.apply
Reflect.apply = function(a0, a1, a2)
{
    if(a1) {
        alert("reflect.apply called!")
    }
    return v0(a0, a1, a2);
};
