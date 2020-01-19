let Team = require('../models/team.model');

exports.create_team = (req,res) => {
    const teamname = req.body.teamname;
    const age = Number(req.body.age);

    const newTeam = new Team({
        teamname,
        age
    });

    newTeam.save()
    .then(()=>res.json('Team Added'))
    .catch((err)=> res.json('Error: ' + err))
}

exports.show_team = (req,res)=>{
    Team.find()
    .then( teams => {res.json(teams);console.log(req);})
    .catch(err => res.status(400).json('Error: ' + err));
}
