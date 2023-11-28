const User = require("../../models/userModel");
const RefreshToken = require('../../models/refreshTokenModel')
const jwt = require("jsonwebtoken");
const AppErorr = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");
const { promisify } = require("util");
const Role = require("../../models/roleModel");
const Permission = require("../../models/permissionModel");
const RolePermission = require("../../models/rolePermissionModel");


const getToken = (username) => {
  return jwt.sign({ name: username }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30m",
  });
};

const getRefreshToken = (username) => {
  return jwt.sign({ name: username }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "60m",
  });
};


// update access toekn using refration token
const refreshToken = catchAsync(async (req, res) => {
  const Rtoken = req.body.refreshToken

  if (Rtoken == null) return res.sendStatus(401)
  const refreshToken = await RefreshToken.findOne({ token: Rtoken })

  if (!refreshToken) return res.sendStatus(401)

  const decoded = await promisify(jwt.verify)(Rtoken, process.env.REFRESH_TOKEN_SECRET);

  const refreshToken1 = getRefreshToken(decoded.name)

  const accessToken = getToken(decoded.name)
  const updateRefreshToken = await RefreshToken.findOneAndUpdate({ username: decoded.name }, { token: refreshToken1 })

  res.json({ accessToken, refreshToken: refreshToken1 })

});



const signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  const data = {
    username: newUser.username,
    user: newUser._id,
  };

  const token = getToken(newUser.username);
  const refreshToken = getRefreshToken(newUser.username)

  const newrefreshToken = await RefreshToken.create({ username: newUser.username, token: refreshToken })
  res.status(200).json({
    success: "success",
    message: "The User is created successfully!",
    ddata: {
      accessToken: token,
      refreshToken,
      role: newUser.role,
      _id: newUser._id,
      username: newUser.username,
      gender: newUser.gender,
      email: newUser.email,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
    },
  });
});

const login = catchAsync(async (req, res, next) => {
  console.log("-------------------++")
  const { username, password } = req.body;
  if (!username || !password) {
    return next(new AppErorr("username and password must be provided!", 401));
  }


  const user = await User.findOne({ username: username }).select("+password");
  console.log("----------,", user)

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppErorr("Incorrect username or password", 401));
  }


  const token = getToken(user.username);
  const refreshToken = getRefreshToken(user.username)
  const updateRefreshToken = await RefreshToken.findOneAndUpdate({ username: username }, { token: refreshToken })

  res.status(200).json({
    status: "succes",

    data: {
      accessToken: token,
      refreshToken,
      role: user.role,
      _id: user._id,
      username: user.username,
      gender: user.gender,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
  });
});



const protect = catchAsync(async (req, res, next) => {
  //check if there is a token
  let token;
  if (
    req.headers.authorization ||
    req.headers.authorization?.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(new AppErorr("yor are not logged in", 401));
  }
  // varification token
  console.log(token);
  const decoded = await promisify(jwt.verify)(token, process.env.ACCESS_TOKEN_SECRET);

  // check if the user still exixst
  const freshUser = await User.findOne({ username: decoded.name });
  if (!freshUser) {
    return next(new AppErorr("the user is does not exist", 401));
  }

  // check if the user change password after the token wa issued

  if (freshUser.changePasswordAfter(decoded.iat)) {
    return next(
      new AppErorr("user recently chaged password! please log in again.", 401)
    );
  }

  req.user = freshUser;
  next();
});



const getRoles = catchAsync(async (req, res, next) => {
  
  const role = await Role.find()
  res.status(201).json({
    status: "success",
    message: "The Role is created successfully!",
    data:role

  })
});


// add Role
const addRole = catchAsync(async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return next(
      new AppErorr("name is require.", 400)
    );
  }
  const role = await Role.create({ role_name: name })
  res.status(201).json({
    status: "success",
    message: "The Role is created successfully!",

  })
});



// edit Role
const editRole = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  
  const role = await Role.findByIdAndUpdate(id,req.bosy,{new:true})
  if (!role) {
    return next(new AppErorr('role is not found!', 404))
  }
  console.log(role)
  res.status(201).json({
    status: "success",
    message: "The Role is created successfully!",
    role

  })
});



// delete Role
const deleteRole = catchAsync(async (req, res, next) => {
  const { id } = req.params;


  const role = await Role.findByIdAndDelete(id)
  if (!role) {
    return next(new AppErorr('role is not found!', 404))
  }
  res.status(204).json({
    status: "success",
    message: "The Role is deleted successfully!",

  })
});




// add permission
const addPermission = catchAsync(async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return next(
      new AppErorr("name is require.", 400)
    );
  }
  const permission = await Permission.create({ perm_name: name })
  res.status(201).json({
    status: "success",
    message: "The Permission is created successfully!",

  })
});
// edit Permission
const editPermission = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  
  const permission = await Permission.findByIdAndUpdate(id,req.bosy,{new:true})
  if (!permission) {
    return next(new AppErorr('permission is not found!', 404))
  }
  res.status(201).json({
    status: "success",
    message: "The Permission is created successfully!",

  })
});



// delete Permission
const deletePermission = catchAsync(async (req, res, next) => {
  const { id } = req.params;


  const permission = await Permission.findByIdAndDelete(id)
  if (!permission) {
    return next(new AppErorr('permission is not found!', 404))
  }
  res.status(204).json({
    status: "success",
    message: "The Permission is deleted successfully!",

  })
});


// add user in to a group
const addUserToGroup = catchAsync(async (req, res, next) => {
  const { userIds, id } = req.body;
  console.log("******////////*****************",req.body)
  const group = await Role.findById({ _id: id });
  if (!group) {
    return next(new AppErorr('Group is not found!', 404))
  }

  for (let userId of userIds) {

    await User.findByIdAndUpdate(userId, { $addToSet: { roles: group._id } }, {
      new: true,
    })
  }
  res.status(201).json({
    status: "success",
    message: "The Users is added successfully!",

  })
});
// add user in to a group
const deleteUserToGroup = catchAsync(async (req, res, next) => {
  const { userIds, id } = req.body;
  const group = await Role.findById({ _id: id });
  if (!group) {
    return next(new AppErorr('Group is not found!', 404))
  }

  for (let userId of userIds) {

    await User.findByIdAndUpdate(userId, { $pull: { roles: group._id } }, {
      new: true,
    })
  }
  res.status(201).json({
    status: "success",
    message: "The Users is added successfully!",

  })
});



//  addRolePermission
const addRolePermission = catchAsync(async (req, res, next) => {
  const {id, type, perm_id, read,update,create,destroy} = req.body;

  if (type == "user") {
    
    const user = await User.findById(id);
    if (!user) {
      return next(new AppErorr("There is not user in this ID", 404));
    }
    const role = await Role.create({ role_name: user.username })
    user.roles = [...user.roles, role._id]
    await user.save();

    const rolePermission = await RolePermission.create({
      permission: perm_id,
      role: role._id,
      create:create,
      read:read, 
      update:update, 
      delete:destroy

      });
  } else {
    const group = await Role.findById(id);
    if (!group) {
      return next(new AppErorr("There is not group in this ID", 404));
    }


    const rolePermission = await RolePermission.create({
      permission: perm_id,
      role: group._id,
      create:create,
      read:read, 
      update:update, 
      delete:destroy

      });

  }
  res.status(201).json({
    status: "success",
    message: "The rolePermission is created successfully!",

  })
});


// update RolePermission
const updateRolePermission = catchAsync(async (req, res, next) => {
  const {id} = req.params;

  
    const rolePermission = await RolePermission.findById(id,req.body,{new:true});
    // if (!rolePermission) {
    //   return next(new AppErorr("There is not rolePermission in this ID", 404));
    // }

   
  
  res.status(201).json({
    status: "success",
    message: "The rolePermission is created successfully!",
    data:rolePermission

  })
});






//role and permmision baseed
const restricTo = (permissionName, arr) => {
  return catchAsync(async (req, res, next) => {

    const user = await req.user.populate('roles'); // d ,a

    for (let role of user.roles) {
      const rolePermission = await RolePermission.find({ role: role._id }).populate('permission');

      console.log("------------------------------", rolePermission)

      if (!rolePermission) {
        rolePermission = []
      }


      const hasRequiredPermission = rolePermission.some((rp) => {

        if (rp.permission.perm_name == permissionName) {
          const check = {
            read: rp.read,
            create: rp.create,
            update: rp.update,
            delete: rp.delete
          }


          for (let i of arr) {
            console.log(check)

            console.log("------------------------------", check[i])
            if (!check[i]) {
              console.log("booooooooooooooooooooooom")
              return false
            }



          }
          return true
        } else {
          return false
        }
      })

      console.log('**************************', hasRequiredPermission)

      if (hasRequiredPermission) {
        return next();
      }


    }

    return next(
      new AppErorr('you have not this permmision', 403)
    );

  });
};



module.exports = {
  refreshToken,
  signup,
  login,
  protect,
  getRoles,
  addRole,
  editRole,
  deleteRole,
  addPermission,
  editPermission,
  deletePermission,
  addUserToGroup,
  deleteUserToGroup,
  addRolePermission,
  updateRolePermission,
  restricTo
}