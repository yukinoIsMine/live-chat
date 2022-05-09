import { ref } from "vue";
import { auth } from "../firebase/config";

let error = ref(null);

let createAccount = async (email, password, displayName)=>{
  try{
    let res = await auth.createUserWithEmailAndPassword(email, password)
    if(!res){
      throw new Error("Failed to create new account. Please try again.")
    }
    res.user.updateProfile({ displayName })
    return res;
  }catch(err){
    error.value = err.message;
  }
}

let useSignup = ()=>{
  return {error, createAccount}
}

export default useSignup;