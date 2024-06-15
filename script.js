const Bill=document.querySelector("#Bill");
const People=document.querySelector("#people");


window.addEventListener('submit',(e)=>
{
    e.preventDefault();
});

function errb(x){
    switch (x) {
        case 1:
            document.querySelector("#err-b").innerText="Can't be zero";
            break;
        case 2:
            document.querySelector("#err-b").innerText="";
            break;
    
        default:
            break;
    }
    
}
function errp(x){
    switch (x) {
        case 1:
            document.querySelector("#err-p").innerText="Can't be zero";
            break;
        case 2:
            document.querySelector("#err-p").innerText="";
            break;
    
        default:
            break;
    }
    
}
function errt(x){
    switch (x) {
        case 1:
            document.querySelector("#err-t").innerText="forgot select tip ";
            break;
        case 2:
            document.querySelector("#err-t").innerText="";
            break;
    
        default:
            break;
    }
    
}
function main(){
    window.addEventListener("keypress",(e)=>{
        if (e.key==="Enter") {
            let bnum=Number(Bill.value);
            let pnum=Number(People.value);
            if (bnum===0) {
                errb(1);
                return false;
                
            }
            else{
                errb(2);

            }
            if(pnum===0) {
                errp(1);
                return false;
            }
            else(
                errp(2)
            )
            if (tip===0) {
                errt(1);
                return false;    
            }
            else{
                errt(2);
            }

        function checkcalc() {
            let sum=bnum*(1+tip);
            sum=sum.toFixed(2);
            let tipAmount=(sum-bnum)/pnum;
            tipAmount=tipAmount.toFixed(2);
            let total=sum/pnum;
            total=total.toFixed(2);
            console.log(total);
            document.querySelector("#tip-amount").innerHTML="&dollar;"+tipAmount;
            document.querySelector("#total-amount").innerHTML="&dollar;"+total;
        }
        checkcalc();
            
        }
        
    
    });

    let buttons=document.querySelector("#tip").querySelectorAll("button");
    let tipInput=document.querySelector("#tip").querySelector("input");
    let tip=0;
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(button => button.classList.remove('active'));
            button.classList.add('active');
            tip=Number(button.value);
            });
    });  

    tipInput.addEventListener("keypress",(e)=>{
        if (e.key==="Enter") {
            tip=Number(tipInput.value)/100;
            if (tip===0) {
                errt(1);    
            }
            else{
                errt(2);
            }

        }
            
        });
    tipInput.addEventListener("click",(e)=>{
        buttons.forEach(button => button.classList.remove('active'));
        
    });
    
}  
main();
document.querySelector("#RESET").addEventListener("click",(e)=>{
    location.reload();

});

