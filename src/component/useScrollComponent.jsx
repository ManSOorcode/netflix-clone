// import { useState } from "react";
// import { movieTrailer } from "../store/reducer";
// import { useDispatch } from "react-redux";

// const useScrollComponent = () => {
//   const [isTrailer, setTrailer] = useState({
//     index: "",
//     // scrollHeight: 0,
//     // isScroll: false,
//   });

//   const dispatch = useDispatch();
//   const clickhandler = (id, type, movieName, index) => {

//     if (isTrailer.index === index && isTrailer.isScroll) {
//       setTrailer({
//         index: "",
//         // scrollHeight: 0,
//         // isScroll: false,
//       });

//       // window.scrollTo({
//       //   top: isTrailer.scrollHeight,
//       //   behavior: "smooth",
//       // });
//     } else {
//       dispatch(movieTrailer({ id: id, type: type, movieName: movieName }));

//       setTrailer({
//         index: index,
//         // scrollHeight: window.scrollY,
//         // isScroll: true,
//       });
//       // const windowHeight = window.innerHeight;

//       // const scrollableContent =
//       //   document.documentElement.scrollHeight - windowHeight;
//       // const targetPosition = Math.min(
//       //   window.scrollY + windowHeight - 100,
//       //   scrollableContent
//       // );

//       // window.scrollTo({
//       //   top: targetPosition,
//       //   behavior: "smooth",
//       // });
//     }
//   };
//   return { isTrailer, clickhandler };
// };

// export default useScrollComponent;
