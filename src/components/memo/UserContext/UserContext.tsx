import {createContext} from 'react'

const UserContext = createContext({
    name:'',
    last_name:'',
    age:18,
});

export default UserContext ;
