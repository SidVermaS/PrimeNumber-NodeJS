import {Request, Response} from 'express'

const calculate=async (req: Request, res: Response)=> {
    try {
        let { value }=req.body
        if(isNaN(value)) {
            return res.status(400).json({message: 'Enter a valid number', })
        } else {
            value=parseInt(value)
            let isPrime:boolean=true
            for(let index=2; index<=Math.sqrt(value); index++) {
                if(value%index===0) {
                    isPrime=false
                    break
                }
            }
            const message:string=isPrime?`${value} is a prime number`:`${value} is not a prime number`
            return res.status(200).json({message,})
        }
    } catch(error) {
        return res.status(500).json({message: 'Failed to calculate', error})
    }
}

export {
    calculate
}