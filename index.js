import { phoneList } from "./phone.js";

phoneList.map((item,i)=>{
    let Details=` price of ${item.name} is ${item.price} Tk`
    console.log(Details)
})