
import { api } from './apiClient'
import { KeychainStorage } from '../storage/KeychainStorage'
import { CrashService } from '../services/CrashService'

const storage = new KeychainStorage()
const crash = new CrashService()

let refreshing=false
let queue:any[]=[]

export const setupInterceptors=()=>{

  api.interceptors.request.use(async c=>{
    const t=await storage.get('access')
    if(t) c.headers.Authorization=`Bearer ${t}`
    return c
  })

  api.interceptors.response.use(
    r=>r,
    async e=>{
      crash.record(e)

      const orig=e.config
      if(e.response?.status!==401) throw e

      if(!refreshing){
        refreshing=true
        const newToken='new-token'
        await storage.set('access',newToken)
        refreshing=false

        queue.forEach(cb=>cb(newToken))
        queue=[]
        orig.headers.Authorization=`Bearer ${newToken}`
        return api(orig)
      }

      return new Promise(res=>{
        queue.push((t:string)=>{
          orig.headers.Authorization=`Bearer ${t}`
          res(api(orig))
        })
      })
    }
  )
}
