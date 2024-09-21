export function Logo() {
  return (
    <svg width="198" height="206" viewBox="0 0 198 206" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="166" fill="#F5F5F5" />
      <path d="M8 27.5312L47.3193 -0.000419617L124 114L102 141L8 27.5312Z" fill="#F5F5F5" />
      <path d="M151.214 2L190.533 29.5317L102 141L78 112L151.214 2Z" fill="#F5F5F5" />
      <rect x="150" y="2" width="48" height="166" fill="#F5F5F5" />
      <path
        d="M63.1009 186.455H67.4545L71.1477 195.46H71.3182L75.0114 186.455H79.3651V201H75.9418V192.065H75.821L72.3267 200.908H70.1392L66.6449 192.016H66.5241V201H63.1009V186.455ZM84.7042 201H80.9258L85.8335 186.455H90.5138L95.4215 201H91.6431L88.2269 190.119H88.1133L84.7042 201ZM84.1999 195.276H92.0977V197.946H84.1999V195.276ZM94.6953 189.31V186.455H106.989V189.31H102.579V201H99.1129V189.31H94.6953ZM108.706 201V186.455H118.848V189.31H112.222V192.293H118.33V195.155H112.222V198.145H118.848V201H108.706ZM120.326 186.455H124.253L127.328 192.541H127.456L130.532 186.455H134.459L129.14 196.142V201H125.645V196.142L120.326 186.455Z"
        fill="#F5F5F5"
      />
    </svg>
  );
}

export function LogoRed() {
  return (
    <svg width="68" height="58" viewBox="0 0 68 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16.3107" height="56.4078" fill="#FF3D00" />
      <path d="M2.71844 9.35547L16.0794 4.741e-05L42.1359 38.7379L34.6602 47.9126L2.71844 9.35547Z" fill="#FF3D00" />
      <path d="M51.3833 0.679688L64.7443 10.0351L34.6602 47.9127L26.5048 38.0583L51.3833 0.679688Z" fill="#FF3D00" />
      <rect x="50.9709" y="0.679688" width="16.3107" height="56.4078" fill="#FF3D00" />
    </svg>
  );
}

import tuto1 from '../../../assets/tuto1.png';
import tuto2 from '../../../assets/tuto2.png';
import tuto3 from '../../../assets/tuto3.png';
import tuto4 from '../../../assets/tuto4.png';

export function Tuto1() {
  return <img src={tuto1}></img>;
}

export function Tuto2() {
  return <img src={tuto2}></img>;
}

export function Tuto3() {
  return <img src={tuto3}></img>;
}

export function Tuto4() {
  return <img src={tuto4}></img>;
}
