interface VerticalDividerProps {
  className?: string;
}

const VerticalDivider: React.FC<VerticalDividerProps> = ({ className = '' }) => {
  return <div className={`border-r h-full ${className}`}></div>;
};

export default VerticalDivider;
