let accounts=[{
    id:'bca1',
    amount:1000
}]
const read=(id)=>{
    return accounts.find(account=>account.id===id)
}
exports.create=(id,amount)=>{
    const isExists=read(id)
    if(!isExists){
        accounts.push({
          id,
          amount:parseInt(amount)  
        })
    }
}
exports.read=(id)=>{
   return read(id)
}
exports.update=(id,amount,type)=>{
    const isExists=read(id)
    if(isExists){
        accounts=accounts.map(account=>{
            if(type==='deposit'){
                account.amount+=parseInt(amount)
            }else if(type==='withdraw'){
                account.amount-=parseInt(amount)
            }
            return account
        })
    }
}
exports.deleteAccount=(id)=>{
    accounts=accounts.filter(account=>account.id!==id)
}