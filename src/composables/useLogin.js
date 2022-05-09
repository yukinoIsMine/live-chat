const { ref } = require("vue");
import { auth } from "../firebase/config"

let error = ref(null);

let signIn = async (email, password)=>{
  try{
    let res = await auth.signInWithEmailAndPassword(email, password);
    if(!res){
      throw new Error("Failed to log in. Please try again.")
    }
    return res;
  }catch(err){
    error.value = err.message;
  }
}

let useLogin = ()=>{
  return { error, signIn}
}

export default useLogin;