import {z} from 'zod'

export const userSchema = z.object({
    name:z.string().min(3,{error: 'please enter your name'}),
    email :z.email({error:'please enter your email'}),
    address:z.string({error:'please enter your address'})
    });


export const firstStepSchema = z.object({
    name:z.string().min(3,{error: 'please enter your name'}),
    email :z.email({error:'please enter your email'}),
})
export const secondStepSchema = z.object({
     address:z.string({error:'please enter your address'})
})
    
export type TuserSchema = z.infer<typeof userSchema>
export type TfirstStepSchema = z.infer<typeof firstStepSchema>
export type TsecondStepSchema = z.infer<typeof secondStepSchema>

