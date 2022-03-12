const inputField=(id)=>{
   return document.getElementById(id).value
}

document.getElementById("button").addEventListener('click',function(){
    /* const inputField1=document.getElementById("input-field1").value 
    const inputField2=document.getElementById("input-field2").value  */
    const inputField1=inputField("input-field1")
    const inputField2=inputField("input-field2")
    const result=parseFloat(inputField1)+parseFloat(inputField2)
 
    console.log(result)
    const amount = document.getElementById('amount').innerText=result

})