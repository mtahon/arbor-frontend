import React from 'react';
import { SvgIcon } from '@material-ui/core';

export default function StepperMetaMaskIcon(props) {
  return (
    <SvgIcon {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17.1056 3.55292L14.382 9.00013H9.61809L6.89448 3.55292C6.48949 2.74294 5.30244 2.84539 5.04223 3.71279L2.04223 13.7128C1.92358 14.1083 2.0602 14.536 2.38611 14.7895L11.3861 21.7895C11.7472 22.0703 12.2529 22.0703 12.614 21.7895L21.614 14.7895C21.9399 14.536 22.0765 14.1083 21.9579 13.7128L18.9579 3.71279C18.6977 2.84539 17.5106 2.74294 17.1056 3.55292ZM15.8945 10.4473L17.7668 6.70271L19.8454 13.6313L12.0001 19.7333L4.15472 13.6313L6.23331 6.70271L8.10563 10.4473C8.27502 10.7861 8.62128 11.0001 9.00005 11.0001H15.0001C15.3788 11.0001 15.7251 10.7861 15.8945 10.4473Z" fill={props.color}/>
    </SvgIcon>
  )
}