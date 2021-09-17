const jwt = require('jsonwebtoken')

const secret = 'd4a0201e0ef6114ef5e1929db4b879632ecce4b0129ea766d0373cdf10622e96'
const expiration = '034d8c1c9a45afcc82b546d7b5daf9253bed6323202ff9dc76b1fea10d0e13c5'

App.use(express.json())

let refreshToken = []
app.delete('/logout', (req, res) => {
    refreshToken = refreshToken.filter(token => token !== req.body.token)
    res.sendStauts(204)
})
app.post('/token', (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    if (refreshToken.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) =>{
        if (err) return res.sendStatus(403)
        const accessToken = generateAccessToken({ name: user.name})
        res.json({ accessToken: accessToken }
    })
})

app.post('/login', (req, res) => {
    const username = req.body.username
    const user = { name: username }

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    refreshToken.push(refreshToken)
    res.json({ accessToken: accessToken, refreshToken: refreshToken })
})

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5m' })

}
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    Bearer TOKEN = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStauts(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

