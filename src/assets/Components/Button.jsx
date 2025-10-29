export default function Button({ arr, btnNext, btnPrevious }) {
  const btnCondition = Math.floor(arr / 5);
  console.log(btnCondition);
  return (
    <div className="teste">
      {btnCondition > 1 && (
        <button onClick={btnPrevious} className="btnPrev">
          {btnCondition - 1}
        </button>
      )}

      <button onClick={btnNext} className="btnNext">
        {btnCondition}
      </button>
    </div>
  );
}
