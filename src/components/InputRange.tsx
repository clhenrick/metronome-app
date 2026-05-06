import { type AriaAttributes, type ChangeEvent, type ChangeEventHandler, useEffect, useRef } from "react";

type Props = Pick<AriaAttributes, "aria-label" | "aria-valuetext"> & {
  id?: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const updateRangePct = (el: HTMLInputElement) => {
  const min = el.min || 0;
  const max = el.max || 100;
  const pct = (+el.value - +min) / (+max - +min) * 100;
  el.style.setProperty('--range-pct', pct + '%');
};

function InputRange(props: Props) {
  const sliderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('input', (event) => updateRangePct(event.target as HTMLInputElement));
      updateRangePct(slider);
    }
    return () => {
      if (slider) {
        slider.removeEventListener('input', (event) => updateRangePct(event.target as HTMLInputElement));
      }
    }
  }, []);

  return (
    <input ref={sliderRef} type="range" {...props} />
  );
}

export default InputRange;
