 let details= []
 
const sumbit = (name,email,phonenumber,message) =>
 {

    details.push({

        name:name,
        email:email,
        phonenumber:phonenumber,
        message:message

})

return 1;
 
}
 
let getEnquiries = () => {

    return details
  }


module.exports={

sumbit,
getEnquiries
}

