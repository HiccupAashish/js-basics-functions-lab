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
function calculatesFarePrice(start, destination){
    if(destination> start){
        const d=(destination-start)*264;
        if (d<=400){
            return 0;
        }
       else if (400<=d<=2000){
            return ((d-400)*0.02);
        }
        else  if (2000<d>2500){
            return 25;
        }
        
        else {
            return ("cannot travel that far");
        }
    }
        else if(start>destination)
        {
            const d=(start-destination)*264;
            if (d<=400){
                return 0;
            }
           else if (400<=d<=2000){
                return ((d-400)*0.02);
            }
          else  if (2000<d>2500){
              return 25;
          }
            else {
                return "cannot travel that far";
            }
        }

    
}