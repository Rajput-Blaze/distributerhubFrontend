import Loader from 'react-loader-spinner';
import React from 'react';
export default function Loaderr() {
  //other logic

  return (
    <Loader
      type='Puff'
      color='#00BFFF'
      height={50}
      width={50}
      timeout={30000} //3 min
    />
  );
}
// import React from 'react'

// export default function Loaderr() {
//     return (
//         <div>

//         </div>
//     )
// }
