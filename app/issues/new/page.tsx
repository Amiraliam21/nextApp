'use client';

import {TextField, TextArea, Button} from '@radix-ui/themes'
import React from 'react'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root>
          <TextField.Input placeholder="Insert the Issue" />
        </TextField.Root>
        <TextArea placeholder="Description" />
        <Button>Submit the new Issue</Button>


    </div>
  )
}

export default NewIssuePage