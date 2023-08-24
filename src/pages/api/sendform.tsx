// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer')

export default async (req:any, res:any) => {
  
    // create reusable transporter object using the default SMTP transport
    let transporter = await nodemailer.createTransport({
      port: 465,
      host: "mail-serwer141299.lh.pl",
      // secure: true,
      tls: {
        ciphers: "SSLv3",
      },
      auth: {
        user: process.env.MAIL_ADRESS_TO, // generated ethereal user
        pass: process.env.MAIL_PASS, // generated ethereal password
      },
    })

    await transporter.verify(function (error:string, success:string) {
      if (error) {
          console.log(error);
          // return res.json({info:"nie działa bo: "+error})
      } else {
          console.log("Server is ready to take our messages");
          // return res.json({info:"działa: "+success})
      }})


    const mailData = {
      from: req.body.mail,
      to: process.env.MAIL_ADRESS_TO,
      subject: `Wiadomość ze strony od: ${req.body.name}`,
      text: "Hello. This email is for your email verification.",
      html: 
      `Imię i nazwisko  ${req.body.name}`+`<br>`+
      `Firma: ${req.body.company}`+`<br>`+
      `Email kontaktowy: ${req.body.mail}`+`<br>`
    }

    await transporter.sendMail(mailData, function (err:string, info:string) {
      console.log("wysyłam")
      if(err){
        // console.log("błąd: " +err)
        return res.json({info:"unsended"})
      }
      else{
        // console.log("działa")
        return res.json({info:"sendet"})
    }})

}
