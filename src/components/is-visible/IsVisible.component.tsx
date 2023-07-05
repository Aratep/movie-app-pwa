type Props = {
  isVisible: boolean;
  children: any;
};

const IsVisible = ({ children, isVisible }: Props) => {
  return isVisible ? children : null;
};

export default IsVisible;
