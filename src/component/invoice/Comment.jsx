import React from 'react'
import SectionHeading from '../common/SectionHeading'
import commentSvg from "../../assets/svg/comments.svg"
import TextField from '../common/TextField'
import { useFormikContextProvider } from '../../context/formikContext'

const Comment = () => {
  return (
    <div id="comments">
      <SectionHeading  iconPath={commentSvg} iconAlt="comment-icon" title="Comments" />
      <div className='my-6'>
        <TextField name="comments" placeholder="Add a comment and use @Name to tag someone" />
      </div>
    </div>
  )
}

export default Comment
