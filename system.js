
  const base_url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"
let country=document.querySelectorAll(".dropdown select")
let from="USD",to="INR"
for(let count1 of country){
  for( cl in countryList){
    let newselect=document.createElement("option");
    newselect.innerText=cl;
    newselect.value=cl;
    if(count1.name==="from1" && cl==="USD")
    newselect.selected="selected"

else  if(count1.name==="to1" && cl==="INR")
newselect.selected="selected"
    count1.append(newselect)
    
  }
  if(count1.name==="from1")
{  count1.addEventListener("change",(evt)=>{
    changeflag(evt.target)
     })
}
if(count1.name==="to1")
{  count1.addEventListener("change",(evt)=>{
    changeflag1(evt.target)
     })
}

}

const changeflag=(evt)=>
{
  let a=evt.value;
  let c=countryList[a];
  let newsrc=`https://flagsapi.com/${c}/flat/64.png`
  from=a
 
  let li=document.querySelector(".select_cont img")
  li.src=newsrc
}
const changeflag1=(evt)=>
{
  let a=evt.value;
  let c=countryList[a]; 
  to=a;
  let newsrc=`https://flagsapi.com/${c}/flat/64.png`
  let li=document.querySelector(".select_cont1 img")
  li.src=newsrc
}
let but=document.querySelector("button");
let amt=document.querySelector("input")
let msg=document.querySelector(".msg")
but.addEventListener("click",async(evt)=>{
      evt.preventDefault();
      let amtvalue=amt.value;
      if(amtvalue==="" || amtvalue< 1)
      {
          amtvalue=1;
          amt.value="1";
      }
      console.log(from,to)
    const url=`${base_url}/${from.toLowerCase()}/${to.toLowerCase()}.json`;
   let response= await fetch(url)
   let data=await response.json()
   let rate=await data[to.toLowerCase()];
   let finalamt=amtvalue*rate;
   console.log(finalamt)
   msg.innerText=`${amt.value} ${from} = ${finalamt} ${to}`
    })