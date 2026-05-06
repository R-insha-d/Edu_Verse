import axios from "axios";
 const commonApi=async(reqUrl,reqMethod,reqData,reqHeader)=>{
    const config={
        url:reqUrl,
        method:reqMethod,
        data:reqData,
        headers:reqHeader?reqHeader:{'content-Type':'application/json'}
    }

    // return await axios(config).then(res=>{
    //     return res}).catch(err=>{
    //         return err
    //     })
    
    try{
        const res = await axios(config)
        return res
    }
    catch(err){
        console.log(err)
        return err.response
    }
 }


 export default commonApi