class LoginPage {
  get userName () {
    return $('input[name="your-name"]');
  }

  get Subject () {
    return $('input[name="your-subject"]');
  }

  get btnSend () {
    return $('input[value="Submit"]');
  }

  get response () {
    return $('.wpcf7-response-output');
  }

  get message () {
    return $('span[data-name="your-message"]');
  }

  async Login (userName, Subject, message)
  {
    await this.userName.setValue(userName);
    await this.password.setValue(Subject);
    await this.message.setValue(message);
    await this.btnSend.click();
  }
}
module.exports = new LoginPage();