import nodemailer from "nodemailer";
import * as dotenv from 'dotenv';
dotenv.config();
console.log(process.env.USER);
const enviar = (option, template,) => {
  let templates = [
    {
      id: "mensaje",
      subject: "Miguel recibiste un mensaje", //rellenar con objeto datos
      text: "Este es un texto de prueba",
      html: `
  <html>
    <head>
      <title>hola</title>
    </head>
    <body>
      <p>El mensaje biene de parte de ${option.name},</p>
      <p>Mensaje: ${option.message}</p>
    </body>
  </html>
  `,
    },
    {
      id: "psReset",
      subject: "Recuperacion de contraseña",
      text: "Este es un texto de prueba",
      html: `
  <html>
    <head>
      <title>hola</title>
    </head>
    <body>
      <p>Hola solo prueba,</p>
      <a href=/newpassword/?token=> Haga click en el siguiente Link </a>
    </body>
  </html>
  `,
    },
  ];

  let datos = templates.filter((dato) => dato.id === template);

  if (datos.length == 0) {
    return console.log("No se ha seleccionado ningun template");
  }
  let transport = nodemailer.createTransport({
    host: "smtp.gmail.com", //Servidor del email.
    post: 465,
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  let mailOptions = {
    form: "remitente",
    to: process.env.USER,
    subject: datos[0].subject,
    html: datos[0].html,
  };

  transport.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log("email enviado");
    }
  });
};

export { enviar };