const express = require('express')
const app=express()
const {create,read,update, deleteAccount}=require('./Service/bankService')

app.get('/account/new/:accountID/:amount', (req, res)=>{
    const {accountID,amount}=req.params
	create(accountID,amount)
	res.send(`account nr ${accountID} created with ${amount} euros`)
})
app.get('/:accountID/withdraw/:amount', (req, res)=>{
    const {accountID,amount}=req.params
    update(accountID,amount,'withdraw')
    res.send(`${amount} euros taken from account nr ${accountID}`)
})	
app.get('/:accountID/deposit/:amount', (req, res)=>{
    const {accountID,amount}=req.params
    update(accountID,amount,'deposit')
    res.send(`${amount} euros added to account nr ${accountID}`)
})	
app.get('/:accountID/balance', (req, res)=>{
    const {accountID}=req.params
    const result=read(accountID)
    const response=result?`The balance of account nr ${accountID} is ${result.amount} euros`: "Account not found"
    res.send(response)
})
app.get('/:accountID/delete', (req, res)=>{
    const {accountID}=req.params
    deleteAccount(accountID)
    res.send(`Account nr ${accountID} deleted`)
})	




app.listen(3001, ()=>{
	console.log('serving my master on port 3001x')
})