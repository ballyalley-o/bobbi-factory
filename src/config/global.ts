import dotenv from 'dotenv'
dotenv.config()

const GLOBAL = {
  PORT: process.env.PORT ?? '',
  SERVER: process.env.SERVER?.replace('${PORT}', process.env.PORT ?? '') ?? '',
}

export default GLOBAL
