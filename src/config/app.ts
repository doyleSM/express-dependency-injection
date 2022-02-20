import { setupRoutes, setupContainer, setupMiddlewares } from '@/config'
import express from 'express'

export const initilizeApp = async () => {

  const app = express()
  await setupContainer()
  setupMiddlewares(app)
  await setupRoutes(app)
  return { app }
}
