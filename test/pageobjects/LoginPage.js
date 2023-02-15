
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
    async Login (userName, password) 
    {
        await this.userName.setValue(userName)
        await this.userName.setValue(password)
        await this.btnSend.click()
    }
}

module.exports = new LoginPage();
