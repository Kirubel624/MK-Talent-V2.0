const mongoose = require('mongoose');

const rolePermissionSchema = new mongoose.Schema(
    {
        role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
        permission: { type: mongoose.Schema.Types.ObjectId, ref: 'Permission' },
        create:{
            type:Boolean,
            default:false
        },
        read:{
            type:Boolean,
            default:false
        },
        update:{
            type:Boolean,
            default:false
        },
        delete:{
            type:Boolean,
            default:false
        }
    },
    {
        timestamps:true
    }
)


const RolePermission = mongoose.model('RolePermission',rolePermissionSchema);

module.exports = RolePermission;
