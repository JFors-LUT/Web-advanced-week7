import express, {Express, Request, Response} from "express"

const app: Express = express()
const port: number = 3000

app.get("/hello", (req: Request, res: Response) => {
    let message: string = "Hello world"
    res.send(message)
})

app.listen(port, () => {
    console.log("Server is up'n'running at http://localhost:" + port)
})
