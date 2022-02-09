const Stat = ({ val, color }) => {
  return (
    <progress
      className={`progress progress-${color}`}
      value={val}
      max="150"
    ></progress>
  );
};

export default Stat;
