/** svg path elements for corresponding available icons */
const iconPaths = {
  arrowDown: [
    <path key="a" d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />,
    <path key="b" d="M0-.75h24v24H0z" fill="none" />,
  ],
  arrowUp: [
    <path key="a" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />,
    <path key="b" d="M0 0h24v24H0z" fill="none" />,
  ],
  play: [<path key="a" d="M8 5v14l11-7z" />, <path key="b" d="M0 0h24v24H0z" fill="none" />],
  pause: [
    <path key="a" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />,
    <path key="b" d="M0 0h24v24H0z" fill="none" />,
  ],
};

export type IconName = keyof typeof iconPaths;

export type IconProps = { name: IconName; fillColor?: string; width: number; height: number };

/** renders an SVG element for use as an icon */
export function Icon({ name, fillColor = '#222', height, width }: IconProps) {
  const children = iconPaths[name];
  return (
    <svg aria-hidden="true" fill={fillColor} height={height} viewBox="0 0 24 24" width={width}>
      {children}
    </svg>
  );
}
