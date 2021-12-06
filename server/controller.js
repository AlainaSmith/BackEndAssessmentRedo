
let globalId = 1


module.exports = {
    getHappy: (req, res)=> {   
        res.status(200).send(happy)   //sending back entire array of movies          
    },

    createHappy: (req, res) => {
    const{title, source, imageURL} =req.body
    let newHappy = {
        title,
        source,
        imageURL,
        id: globalId
    }
    happy.push(newHappy)
    res.status(200).send(happy)
    globalId++
}
}