let character = require('./character.json')
let TeamArr = []

module.exports = {
    getRoaster: (req, res) => {
        res.status(200).send(character)
    },

    addTeam: (req,res) => {
        
        console.log(req.body);
        if(TeamArr.length < 3){
            TeamArr.push(req.body)
            console.log(TeamArr.length);
            res.status(200).send(TeamArr)

        }else{
            console.log(TeamArr);
        }
    },

    deletechar: (req,res) => {
        console.log(TeamArr);
        const {id} = req.params
        let index = TeamArr.findIndex(char => char.id === +id)
        TeamArr.splice(index,1)
        console.log('delete');
        // console.log(TeamArr);
        res.status(200).send(TeamArr)
    }

   
}