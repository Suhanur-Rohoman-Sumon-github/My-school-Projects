const addToDB = (id)=>{
let shopingCard = {};
const storeCard = localStorage.getItem('shoping-card')
if(storeCard){
    shopingCard = JSON.parse(storeCard)
}
const quantity = shopingCard[id]
if(quantity){
    const newqunity = quantity+1;
    shopingCard[id]=newqunity

}else{
    shopingCard[id]=1
}
localStorage.setItem('shoping-card',JSON.stringify(shopingCard))
}
export {addToDB}