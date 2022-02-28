const hd=42
function distanceFromHqInBlocks(a){
if(a>=hd){
    return(a-hd);
}
if(a<hd){
    return(hd-a);
}
}

function distanceFromHqInFeet(b){
    if(b>=hd){
        return((b-hd)*264);
    }
    if(b<hd){
        return((hd-b)*264);
    }
}

function distanceTravelledInFeet(c,d){
if (c<d){
    return ((c-d)*264);
}
    else {
        return((d-c)*264);
    }

}

function distanceTravelledInFeet(a,b){
    if(a>b){
        return (a-b)*264;
    }
    else{
        return (b-a)*264;
    }

}
function calculatesFarePrice(start, destination)
{
    
const f=Math.abs(destination-start)*264;
        
        if (f<=400)
        {
            return 0;
        }
       else if (400<=f && f<2000)
        {
            return ((f-400)*0.02);
        }
        else  if (f>2000 && f<2500)
        {
            return 25;
        }
        
        else 
        {
            return ("cannot travel that far");
        }
    }
    