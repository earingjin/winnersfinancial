import icon1 from '../assets/wizard-icon-1.webp';
import icon2 from '../assets/wizard-icon-2.webp';
import icon3 from '../assets/wizard-icon-3.webp';
import icon4 from '../assets/wizard-icon-4.webp';
import icon5 from '../assets/wizard-icon-5.webp';
import icon6 from '../assets/wizard-icon-6.webp';

const ICON_SRC = {
  income: icon1,
  expense: icon2,
  savings: icon3,
  assets: icon4,
  debt: icon5,
  netWorth: icon6,
};

export default function DiagnosisAreaIcon({ type, className }) {
  const src = ICON_SRC[type];
  if (!src) return null;
  return <img className={className} src={src} alt="" aria-hidden="true" draggable="false" />;
}
