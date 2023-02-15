
class LoginPage {
   
    get userName () 
    {
        return $("input[name='your-name']")
    }

    get password () 
    {
        return $("input[name='your-email']")
    }

    get btnSend () 
    {
        return $("input[value='Send']")
    }

    get response () 
    {
        return $(".wpcf7-response-output")
    }

    get message () 
    {
        return $("textarea[name='your-message']")
    }

    async Login (userName, password, message) 
    {
        await this.userName.setValue(userName)
        await this.password.setValue(password)
        await this.message.setValue(message)
        await this.btnSend.click()
    }
}

module.exports = new LoginPage();
