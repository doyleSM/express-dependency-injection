import "reflect-metadata"
import './config/module-alias'
import { initilizeApp } from "./config"

const port = 3001

const init = (async () => {

  const { app } = await initilizeApp()
  app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
})

init()
