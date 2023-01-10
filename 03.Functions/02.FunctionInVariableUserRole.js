function getUserRole(name , role){
    switch(role){
        case "admin":
            return `${name} is admin with all access`
            break;
        case "subadmin":
            return `${name} is sub-admin with all access`
            break;
        case "testprep":
            return `${name} is testprep with access to create and delete courses`
            break;
        case "user":
            return `${name} is user and have access to the content `
            break;

        default:
            return `${name} is a trial user`
            break;
    }
}

console.log(getUserRole('abhishek','user'))

var getrole = getUserRole('rohan', 'admin')
console.log(getrole)
