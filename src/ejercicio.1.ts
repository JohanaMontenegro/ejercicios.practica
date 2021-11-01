let numeroMes: number = document.getElementById("num.mes");
let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click",() => {
let numbMes = Number(numeroMes.value);
let prntRes = document.getElementById("cantDias");
switch (numbMes){
  case 1:
  console.log("tiene 31 dias");
  prntRes.innerHTML= ("TIENE 31 DIAS");
break;
    case 2:
    console.log("tiene 28 dias");
    prntRes.innerHTML=("TIENE 28 DIAS");
break;
    case 3: 
    console.log("tiene 31 dias");
    prntRes.innerHTML= ("TIENE 31 DIAS");
break;
    case 4:
      console.log("tiene 30 dias");
      prntRes.innerHTML= ("TIENE 30 DIAS");
break;
    case 5:
      console.log("tiene 31 dias");
      prntRes.innerHTML= ("TIENE 31 DIAS");
break;
    case 6:
      console.log ("tiene 30 dias");
      prntRes.innerHTML= ("TIENE 30 DIAS");
break;
    case 7:
      console.log("tiene 31 dias ");
      prntRes.innerHTML=("TIENE 31 DIAS")
break;
    case 8:
      console.log("tiene 31 dias");
      prntRes.innerHTML=("TIENE 31 DIAS");
break;
      case 9:
        console.log(" tiene 30 dias");
        prntRes.innerHTML= ("TIENE 30 DIAS");
break;
      case 10:
        console.log("tiene 31 dias");
        prntRes.innerHTML=("TIENE 31 DIAS");
break;
      case 11:
        console.log("tiene 30 dias");
        prntRes.innerHTML("TIENE 30 DIAS");
break;
      case 12:
        console.log("tiene 31 dias");
        prntRes.innerHTML("TIENE 31 DIAS")

      }
    }S