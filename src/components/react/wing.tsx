interface Props {
  rotate?: boolean;
}

const Wing = ({ rotate }: Props) => {
  if (rotate)
    return (
      <div className="w-64 flex flex-col gap-2 items-start">
        <span className="w-full bg-fifth h-4 rounded-full"></span>
        <span className="w-4/5 bg-second h-4 rounded-full"></span>
        <span className="w-3/5 bg-third h-4 rounded-full"></span>
      </div>
    );
  return (
    <div className="w-64 flex flex-col gap-2 items-end">
      <span className="w-full bg-fifth h-4 rounded-full"></span>
      <span className="w-4/5 bg-second h-4 rounded-full"></span>
      <span className="w-3/5 bg-third h-4 rounded-full"></span>
    </div>
  );
};

export default Wing;
