let bcrypt =require('bcrypt');
let nodemailer = require('nodemailer');
let User= require('../modes/User');
let request = require('request');

// exports.signup = async(res ,req)=>{
//     try{
//         let firstname= req.body.firstname;
//         let lastname =req.body.lastname;
//         let email = req.body.email;
//         let password= req.body.password;
        
//         if(!firstname){
//             return res.status(400).json({
//                 code :400,
//                 message:"firstname can not be blank",
//                 data:[]
//             });
//         }
//         else if(!lastname){
//             return res.status(400).json({
//                 code:400,
//                 message:"lastname cannot be blank",
//                 data:[]
//             })
//         }
//         else if(!email){
//             return res.status(400).json({
//                 code:400,
//                 message:"email cannot be blank",
//                 data:[]
//             })
//         }
//         else if(!password){
//             return res.status(400).json({
//                 code:400,
//                 message:"password cannot be blank",
//                 data:[]
//             })
//         }
//         else{
//             let user= await User.findOne({email:email});
//             if(user){
//                 return res.status(400).json({
//                     code:400,
//                     message:'try with new email ,email id already exist',
//                     data:[]
//                 });
//             }
//             else{
//                 createNewUser();
//             }
//             async function createNewUser(){
//                 const salt = await bcrypt.genSalt(10);
//                 const hashed = await bcrypt.hash(password, salt);
//                 const activationnumber = Math.floor((Math.random() * 546795) + 54);
//                 const newUser= new User({
//                     firstname:firstname,
//                     email:email,
//                     salt:salt,
//                     hash:hashed,
//                     activationnumber:activationnumber,
//                 });
//                 let newuser = await newUser.save();
//                 if(!newuser){
//                     return res.status(400).json({
//                         code:400,
//                         message:'Error in creating User profil',
//                         data:[],
//                     });
//                 }
//                 else{
//                     let link = `http://localhost:3000/api/users/verifyaccount?activationnumber=${activationnumber}&email=${email}`;
//                     //  NodeMailer : To send email
//                     let transporter = nodemailer.createTransport({
//                         service: 'gmail',
//                         auth: {
//                             user: 'dheerajkarki27@gmail.com',
//                             pass: 'dream@4u'
//                         }
//                     });
//                     let mailOptions = {
//                         from: 'dheerajkarki27@gmail.com',
//                         to: email,
//                         subject: ' application activation link',
//                         // html: "Welcome to Loan application",
//                         html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify your account.</a>"
//                     };
//                     transporter.sendMail(mailOptions, function (error, info) {
//                         if (error) {
//                             console.log(error);
//                             console.log('Email not sent...error');
//                         }
//                         else {
//                             console.log('Email sent: ' + info.response);
//                         }
//                     });
//                     // setTimeout(async () => {
//                     //     await User.findOneAndUpdate({email : email}, {$set:{activationnumber : null}});
//                     //     console.log("link exp>>>>>>>>>>>>>>>");
//                     // },600000);

//                     return res.status(200).json({
//                         code: 200,
//                         message: 'Your account has been created successfully.Now click on the link sent in email to verify your account',
//                         data: []
//                     });
//                 }
//         }
//     }
// }
//     catch(err){
//         return res.status(500).json({
//             code:500,
//             message:'something went wrong try after sometime',
//             data:[]
//         });
//     }
// }
exports.signIn =async (res,req)=> {
    try{
        let email= req.body.email;
        let password=req.body.password;
        if(!email){
            return res.status(400).json({
                code:400,
                message:"email can not be blank",
                data:[]
            });
        }
       else if(!password){
           return res.status(400).json({
               code:400,
               message:"password can not be blank";
               data:[]
               
           });
        }
      
    }
    catch{

    }
}