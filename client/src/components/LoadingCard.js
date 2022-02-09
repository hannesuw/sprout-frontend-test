const LoadingCard = () => {
  return (
    <div className="col-span-1 border w-full rounded-md shadow-md animate-pulse">
      <div className="cursor-pointer">
        <div class="rounded-md bg-slate-700 h-60 w-full"></div>
      </div>
      <div class="divider"></div>
      <div>
        <div class="rounded-full bg-slate-700 h-5 w-1/2 mx-auto mb-5"></div>
      </div>
    </div>
  );
};

export default LoadingCard;
