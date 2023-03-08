// import React, { useRef, useEffect, useState } from "react";

// const SecondSectionImgAnimation = (props) => {
//   const SecondSectionRef = useRef();
//   const [isAnimated, setIsAnimated] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const [entry] = entries;
//         if (entry.intersectionRatio >= 1) {
//           setIsAnimated(true);
//         }
//       },
//       { threshold: 1 }
//     );

//     observer.observe(SecondSectionRef.current);

//     return () => observer.disconnect();
//   }, [isAnimated]);
// };

// export default SecondSectionImgAnimation;
