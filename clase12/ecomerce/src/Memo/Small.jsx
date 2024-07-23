import React, {useMemo} from "react";



const Small = React.memo(({ value }) => {
  console.log("Me volvi a renderizar");
  return <small>{value}</small>;
});

export default Small
