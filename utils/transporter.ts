import process from 'node:process'
import nodemailer from 'nodemailer'

const {
  NODEMAILER_HOST,
  NODEMAILER_PORT,
  NODEMAILER_SECURE,
  NODEMAILER_AUTH_USER,
  NODEMAILER_AUTH_PASS,
} = process.env

const transporter = nodemailer.createTransport({
  host: NODEMAILER_HOST,
  port: Number(NODEMAILER_PORT),
  secure: NODEMAILER_SECURE === 'true',
  auth: {
    user: NODEMAILER_AUTH_USER,
    pass: NODEMAILER_AUTH_PASS,
  },
})

export default transporter
