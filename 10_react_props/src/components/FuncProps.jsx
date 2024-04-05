// 1. props 매개편수

// export default function FuncProps(props) {
//   console.log(props);
//   return (
//     <>
//       <h1>함수형</h1>
//       <div>전달받은</div>
//       <div>weather props</div>
//       <div>feeling props</div>
//     </>
//   );
// }
// import PropTypes from "prop-types";

// export default function FuncProps({ weather, feeling, date }) {
//   console.log(weather);
//   console.log(feeling);
//   console.log(date);

//   return (
//     <>
//       <h1>함수형 컴포넌트 사용하기 : {weather}</h1>
//       <div>sajkdhaksjdhjkasH : {feeling}</div>
//       <div>sdjoaisjdoiAJSDIOAJsdoi</div>
//       <div>오늘의 날짜는 {date}</div>
//     </>
//   );
// }

// weather props의 기본값 설정
// 만약 weather props가 전달되지 않으면 알아서 default 값이 됨
// FuncProps.propTypes = {
//   weather: PropTypes.string,
//   feeling: PropTypes.string,
//   date: PropTypes.number.isRequired,
// };

export default function FuncProps(props) {
  return <div onClick={props.children}>안녕</div>;
}
