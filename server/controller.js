const happys = require(`./db.json`)
let globalId = 1


module.exports = {
    getHappys: (req, res)=> {   
        res.status(200).send(happys)  
    },

    createHappy: (req, res) => {
    const{title, source, imageURL} =req.body
    let newHappy = {
        title,
        source,
        imageURL,
        id: globalId
    }
    happys.push(newHappy)
    res.status(200).send(happys)
    globalId++
}
}

//OR

// createHappy: (req, res) => {
//     happyDatabase.push(req.body)
//     res.status(200).send('user successfully added')
// 