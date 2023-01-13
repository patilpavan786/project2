import { atom } from "recoil"
export const Data = atom({
    key: 'Data', 
    default: {isSubscribe:false,
    isLogin:false,
    plan:""
    }
  });

 