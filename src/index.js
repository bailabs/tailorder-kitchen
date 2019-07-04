import React from "react";
import { render } from "react-dom";

import App from "./boot/App";

// render(
//   <div>
//     <DevTools />
//     <Header />
//     <Content>
//       <Category>
//         <OrangeButton onClick={setPendingFilter}>
//           Pending Order
//         </OrangeButton>
//         <BlueButton
//           style={{ marginLeft: 10 }} 
//           onClick={setCompletedFilter}
//         >
//           Completed Order
//         </BlueButton>
//       </Category>
//       <Filter store={stateStore} />
//       <OrderList store={orderStore} />
//     </Content>
//   </div>,
//   document.getElementById("root")
// );

// Display the app
render(<App />, document.getElementById("root"));