import { toast } from 'react-toastify'

const isLoggedIn = (user) => {
    if(user)
        return true
    else{
        toast("You need to signin",{
            type:"error"
        })
        return false
    }
}

export default isLoggedIn
