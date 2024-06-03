import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Progress } from "@/components/ui/progress"

export default function Viewpatient() {
  return (
    <div>
        <Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader className='bg-blue-200 p-4 rounded-md mt-2'>
    <DialogTitle>
  <div className='flex space-x-32'>
    <div>
      <h3>Kebed zelek</h3>
      <p className='text-sm'>Patient of: ADPa</p>
    </div>
    <div className='flex space-x-12'>
      <p className='flex'>
        Age: <h4>52</h4>
      </p>
      <p className='flex'>
        Sex: <h4>M</h4>
      </p>
    </div>
  </div>
</DialogTitle>


    </DialogHeader>
    <DialogDescription>
       <h3 className='flex'>Treatment Plan: <h2 className='font-semibold mb-1 text-black'> run every day</h2></h3>
       <p>progress:</p>
       <Progress value={33} />
       <div className=' mt-3' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
  <button className='bg-gray-300 text-black items-center border-5 p-1'>View Questionnaires Answers</button>
  <div  className=" space-x-4"style={{ marginTop: "10px" }}>
    <button className='border-blue-400  border-2 p-2 rounded-sm text-black'>Send Text</button>
    <button className='bg-blue-400 text-white p-2 rounded-sm'>Assign Task</button>
  </div>
</div>

      </DialogDescription>
  </DialogContent>
</Dialog>

    </div>
  )
}
