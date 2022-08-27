const mailgunSdk = require('mailgun-js');
const axios = require('axios');

const apiKey = process.env.MAILGUN_API_KEY;
const domain = process.env.DOMAIN;
const recaptchaSecredKey = process.env.RECAPTCHA_PRIVATE_KEY;
const mailgun = mailgunSdk({ apiKey, domain });

type sendMailFunction = ({
  name,
  email,
  text,
}: {
  name: string;
  email: string;
  text: string;
}) => Promise<{ statusCode: number; body: string }>;

const validateHuman = async (token: string) => {
  const { data } = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecredKey}&response=${token}`
  );

  return data.success;
};

const sendMail: sendMailFunction = async ({ name, email, text }) => {
  try {
    await mailgun.messages().send({
      to: 'stasieg458@gmail.com',
      from: `${name} ${email}`,
      subject: `Message from ${name}`,
      text,
    });
  } catch (e) {
    console.log('Err', e);
    return {
      statusCode: (e.statusCode as number) || 500,
      body: JSON.stringify({
        error: e.message,
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      result: 'Message has been send.',
    }),
  };
};

exports.handler = async (req) => {
  const { name, email, text, token } = JSON.parse(req.body);

  const isEveryParamRecived = name && email && text && token;
  if (!isEveryParamRecived) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        result: 'Error! Every param needs to be send.',
      }),
    };
  }

  const isHuman = await validateHuman(token);
  if (!isHuman) {
    return {
      statusCode: 418,
      body: JSON.stringify({
        result: 'Error! Request send by a bot',
      }),
    };
  }

  const mailSendResult = sendMail({ name, email, text });

  return mailSendResult;
};
