type ButtonProps = {
  text: string;
  active?: boolean;
  click: () => void;
  number: number;
};

export const Button = ({
  text,
  active = false,
  click,
  number,
}: ButtonProps) => {
  
  const buttonStyle = () => {
    if (active) {
      return "flex py-2 pl-3 pr-2 rounded-md border border-solid border-blue bg-blue justify-center items-center gap-3";
    } else {
      return "flex py-2 pl-3 pr-2 rounded-md border border-solid border-secondary-light bg-white justify-center items-center gap-3";
    }
  };

  const spanStyle = () => {
    if (active) {
      return "flex py-1 px-2 rounded-md bg-light-blue gap-2";
    } else {
      return "flex py-1 px-2 rounded-md bg-off-white gap-2";
    }
  };

  return (
    <button onClick={click} className={buttonStyle()}>
      {text}
      <span className={spanStyle()}>{number}</span>
    </button>
  );
};
