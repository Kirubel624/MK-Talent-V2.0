const User = require("../../models/userModel");
const RefreshToken = require('../../models/refreshTokenModel')
const jwt = require("jsonwebtoken");
const AppErorr = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");
const { promisify } = require("util");
const Permission = require('../../models/permissionModel');
const Role = require("../../models/roleModel");
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


exports.refreshToken = catchAsync(async (req,res)=>{
  const Rtoken = req.body.refreshToken

  if (Rtoken == null) return res.sendStatus(401)
  const refreshToken = await RefreshToken.findOne({token:Rtoken})

  if (!refreshToken) return res.sendStatus(401)

  const decoded = await promisify(jwt.verify)(Rtoken, process.env.REFRESH_TOKEN_SECRET);
  console.log(decoded)

  // jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,(err,user)=>{
  //  if (err) return res.sendStatus(403)
  
  
   const refreshToken1 =  getRefreshToken(decoded.name)

   const accessToken= getToken(decoded.name)
   const updateRefreshToken = await RefreshToken.findOneAndUpdate({username:decoded.name},{token:refreshToken1})

   res.json({accessToken,refreshToken:refreshToken1})
// })
});

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  
  const data = {
    username: newUser.username,
    user: newUser._id,
  };
//   const profile = await Profile.create(data);
  
  const token = getToken(newUser.username);
  const refreshToken= getRefreshToken(newUser.username)
  
  const newrefreshToken = await RefreshToken.create({username:newUser.username,token:refreshToken})
  res.status(200).json({
    success: "success",
   
    ddata: {
      accessToken: token,
      refreshToken,
      role: newUser.role,
      _id: newUser._id,
      username: newUser.username,
      gender: newUser.gender,
      email:newUser.email,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  console.log("-------------------++")
  const { username, password } = req.body;
  if (!username || !password) {
    return next(new AppErorr("username and password must be provided!", 401));
  }
  console.log("-------------------++",2)


  const user = await User.findOne({ username: username }).select("+password");
  console.log("----------,",user)

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppErorr("Incorrect username or password", 401));
  }

  
  const token = getToken(user.username);
  const refreshToken = getRefreshToken(user.username)
  // const refreshToken = getRefreshToken(user._id)
  const updateRefreshToken = await RefreshToken.findOneAndUpdate({username:username},{token:refreshToken})

  res.status(200).json({
    status: "succes",
    
    data: {
      accessToken: token,
      refreshToken,
      role: user.role,
      _id: user._id,
      username: user.username,
      gender: user.gender,
      email:user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
  });
});

exports.protect = catchAsync(async (req, res, next) => {
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
  const freshUser = await User.findOne({username:decoded.name});
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

// exports.restricTo = (...roles) => {
//   return (req, res, next) => {
//     //roles ['admin','user']
//     if (!roles.includes(req.user.role)) {
//       return next(
//         new AppErorr("You do not have permission to perform this Action", 403)
//       );
//     }

//     next();
//   };
// };

//role and permmision baseed
exports.restricTo = ( permissionName,arr ) => {
  return catchAsync(async (req, res, next) => {

    const user =await req.user.populate('roles');

    for (let role of user.roles){
      const rolePermission = await RolePermission.find({role:role._id}).populate('permission');
      console.log("------------------------------",rolePermission)

      if (!rolePermission){
        return next(
          new AppErorr('you have not this permmision',403)
        );
      }


      const hasRequiredPermission = rolePermission.some((rp)=>{
        
        if(rp.permission.perm_name == permissionName){
          const check = {
            read:rp.read,
            create:rp.create,
            update:rp.update,
            delete:rp.delete
          }
         

          for (let i of arr){
            console.log(check)

            console.log("------------------------------",check[i])
            if (!check[i]){
              return false
            }


              
          }
          return true
        }else{
          return false
        }
      })

      console.log('**************************',hasRequiredPermission)

      if( hasRequiredPermission){
      return   next();
      }


    }
    // console.log("------------------------------",(await user.populate('roles')))

    // const permission = await Permission.findOne({
    //   where: { perm_name: permissionName },
    // });
    // if (!permission) {
    //   return next(
    //     new AppError("You do not have permission to perform this Action", 403)
    //   );
    // }
    // const rolePerm = await RolePermission.findOne({
    //   where: { RoleId: req.user.RoleId, PermissionId: permission.id },
    // });
    // if (!rolePerm) {
    //   return next(
    //     new AppError("You do not have permission to perform this Action", 403)
    //   );
    // }
    return next(
      new AppErorr('you have not this permmision',403)
    );
    
  });
};
