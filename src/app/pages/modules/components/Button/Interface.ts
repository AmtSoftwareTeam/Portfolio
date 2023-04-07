interface IProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => {};
  children: string | JSX.Element;
  className?: string;
}

export type { IProps };
