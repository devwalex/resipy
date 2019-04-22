'use strict'

const User = use('App/Models/User')
const Mail = use("Mail");
const randomString = require("random-string");
class UserController {
    
    async allUser({ response }){
        try {
            // fetching all registered users
            const users = await User.all()
            response.status(200).json({
                message: 'All registered users.',
                data: users
            })
        } catch (error) {
            response.status(401).json({
                message: 'Users not found.',
                error
            })
        }
    }

    async showUser({ response, params: { id } }){
        try {
            // fetching user where id is equal to the user id
            const user = await User.query()
            .where('id', id)
            .first()
            // check if the user is found
            if(!user){
                response.status(404).json({
                    message: 'User not found'
                })
            }else{
                response.status(200).json({
                    message: '',
                    data: user
                })
            }
        } catch (error) {
            response.status(404).json({
                message: 'Error Occured!!',
                error
            })
        }
    }
    async register({ response, request }){
        try {
            // Getting the user input
            const { username, email, password } = request.post()

            // Creating a new User object
            const user = new User()
            user.username = username
            user.email = email
            user.password = password
            user.verification_token = randomString({ length: 20 })
            await user.save()
            await Mail.raw(`<center><h1>VERIFY YOUR EMAIL</h1></center><br>
            <p>Dear${user.username}</p><br>
            <p>You have successfully register your acount with us at api.resipy.com. Click on the link below to verify your account.</p>
            <a href=localhost:3333/account/verify/${
            user.verification_token
            }>Verify</a>`, 
            message => {
                message.from(user.email);
                message.to("api@resipy.com");
            })
        } catch (error) {
            response.status(200).json({
                message: 'Cannot Register User',
                error
            })
        }
    }

    async verifyAccount({ response, params: { verification_token } }){
        try {
            const user = await User.findByOrFail(
              "verification_token",
              verification_token
            );
            user.is_verify = 1;
            user.verification_token = null;
            await user.save();
      
            response.status(200).json({
              message: "Your account have been verified",
              data: user
            });
          } catch (error) {
            response.status(404).json({
              message: "Your account has been verified already.",
              error
            });
          }
    }
}

module.exports = UserController
