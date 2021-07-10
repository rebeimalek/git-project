function verif(){
    x=Window.document.f.c.value
    y=Window.document.f.k.value
    
    for(i==1 ; i<=3; i++)
    if ((x.length==3)&&(y.length==3))
    return true;
    else
    return false;
}
function ajouter(){
    p=window.document.f.k.value
    t=window.document.f.c.value/100
    s=p/t*t;
    if((s>=16.5)&&(s<18.5))
    alert("maigreur");
    else if ((s>=18.5)&&(s<=25))
    alert("corpulence normale");
    else if((s>=25)&&(s<=30))
    alert("surpoids");
    else 
    alert("obésité modérée")

}