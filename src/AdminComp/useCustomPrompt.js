// import { useState, useRef, useEffect } from 'react';
// import { unstable_useBlocker } from 'react-router-dom';
// import { Modal, Button } from 'antd';

// const useCustomPrompt = ({ title, contnet }, shouldPrompt) => {
//   const retryFn = useRef(() => {});

//   const handleBlockNavigation = ({ retry }) => {
//     const shouldDisplayPrompt =
//       typeof shouldPrompt === 'boolean' ? shouldPrompt : shouldPrompt();

//     if (shouldDisplayPrompt) {
//       Modal.confirm({
//         title: 'some title',
//         content: 'this is the contnet',
//         onOk() {
//           retry();
//         },
//         onCancel() {},
//       });
//     } else {
//       retry();
//     }
//   };

//   unstable_useBlocker(handleBlockNavigation, shouldPrompt);
// };

// export default useCustomPrompt;