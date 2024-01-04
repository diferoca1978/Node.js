# Implementation Node Mailer to send Emails

1. list of application to send Emails

	a. SendGrid (Second option).
	b. MailGun.
	c. MailTrap.
	d. MailChimp.
	f. ConstantContact.
	g. MailerSend. (Best Option)

2. Using a personal gmail account with nodemailer.


	2.1. First, use this link to configure the two steps auth through this link, and check if it is activated. 
	https://myaccount.google.com/security.

	2.1.2. Second configure the app passwpords through this link 
	https://myaccount.google.com/u/0/apppasswords.

	2.1.3 Then configure our env. file just like this:
	
	PORT = 3000

	MAILER_EMAIL = rodriguezcastrodiegof@gmail.com
	MAILER_SECRET_KEY = vbxf opwu vvcf qaly (NOTE: this secret key only appear once, don´t forget copy. )


	PROD = true

	2.1.4 Check if the configuration is correct using a console.log() onto server.ts file something like this: 

	console.log(envs.MAILER_EMAIL, envs.MAILER_SECRET_KEY)

	
	

