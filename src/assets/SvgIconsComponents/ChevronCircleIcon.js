import React from 'react';
import { SvgIcon } from '@material-ui/core';

export default function ChevronCircleIcon(props) {
  const {color} = props;

  return (
    <SvgIcon
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM11.7071 7.70711L10.2929 6.29289L8 8.58579L5.70711 6.29289L4.29289 7.70711L8 11.4142L11.7071 7.70711Z" fill={color}/>
    </SvgIcon>
  )
}