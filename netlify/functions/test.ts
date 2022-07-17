const mailgunSdk = require('mailgun-js')
const apiKey = process.env.MAILGUN_API_KEY
const domain = process.env.DOMAIN
const mailgun = mailgunSdk({ apiKey, domain })

exports.handler = async (req, res, callback) => {
  const data = JSON.parse(req.body)

  let response
  try {
    /* Send email to recicipent */
    response = await mailgun.messages().send({
      to: "stasieg458@gmail.com",
      from: "cnoters@gmail.com",
      subject: "test",
      text: "test",
    })
  } catch (e) {
    console.log('Err', e)
    return {
      statusCode: e.statusCode || 500,
      body: JSON.stringify({
        error: e.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      result: response.message
    })
  }
}