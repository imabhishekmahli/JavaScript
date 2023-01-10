var whoareyou = 'user'

if(whoareyou == 'admin'){
    console.log('gets full access')
} else if(whoareyou == 'subadmin'){
    console.log('gets access to create/delete course')
} else if(whoareyou == 'testprep'){
    console.log('gets access to create/delete tests')
} else if(whoareyou == 'user'){
    console.log('gets access to consume content')
} else{
    console.log('Invalid')
}