// import React from "react";
// import { Select, Box, MenuItem } from "@mui/material";
// import { SignupProp } from "../Model/Model";

// interface Props {
//   name: string;
//   label: string;
//   value: {};
//   // size: string;
//   // // variant: {};
//   setsingupdata: React.Dispatch<React.SetStateAction<SignupProp>>;
//   state: string[];

// }

// const SelectFIeld: React.FC<Props> = ({ setsingupdata,
//   state,
//   name,
//   label,
//   value,
// }) => {

//   const array = state;

//   return (
//     <Box>
//       <Select>
//         {array.map((item: string) => {
//           <MenuItem
//           name={name}
//           values={value}

//           onClick={(e) =>
//             setsingupdata((values) => ({ ...values, [name]: e.target.value }))
//           }
//           value={item}>{item}</MenuItem>;
//         })}
//       </Select>
//     </Box>
//   );
// };

// export default SelectFIeld;

import React from "react";

export const SelectFIeld = () => {
  return <div>SelectFIeld</div>;
};
