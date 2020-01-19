const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    teamname: {type: String,require: true, minlength: 10},
    age: {type: Number, require: true}
},{
    timestamps: true,
});

const Team = mongoose.model('team',teamSchema);
module.exports = Team;