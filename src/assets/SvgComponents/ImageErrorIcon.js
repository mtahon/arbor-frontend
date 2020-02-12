import React from 'react';
import { SvgIcon } from '@material-ui/core';

export default function ImageErrorIcon(props) {
  return (
    <SvgIcon {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22ZM11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20ZM11 15.2978C12.3195 15.2978 13.5293 15.9402 14.2747 17L15.9106 15.8494C14.7945 14.2627 12.9776 13.2978 11 13.2978C9.02245 13.2978 7.20545 14.2627 6.08944 15.8494L7.72535 17C8.4707 15.9402 9.6805 15.2978 11 15.2978ZM13 11V9H15V11H13ZM7 9V11H9V9H7Z" fill="white"/>
    </SvgIcon>
  )
}