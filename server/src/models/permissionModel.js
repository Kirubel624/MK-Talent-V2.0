const mongoose = require('mongoose');
const permissionSchema = new mongoose.Schema(
    {
        perm_name: {
            type:String,
            unique:true
        }
        
    },{
        timestamps:true
    }
)



const Permission = mongoose.model('Permission',permissionSchema);

module.exports = Permission;



