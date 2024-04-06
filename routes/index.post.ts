import transporter from '../utils/transporter'

export default eventHandler(async (event) => {
  const body = await readBody(event)

  const info = await transporter.sendMail(body)

  return {
    messageId: info.messageId,
  }
})
