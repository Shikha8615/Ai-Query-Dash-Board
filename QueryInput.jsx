import { useDispatch, useSelector } from "react-redux";
import { setQuery, startQuery, setResults, addToHistory } from "../redux/querySlice";
import { useState } from "react";

const mockResults = {
  "total revenue": [10, 20, 30, 40, 50],
  "customer growth": [5, 10, 15, 20, 25],
};

const QueryInput = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query.query);
  const [loading, setLoading] = useState(false);

  const handleQuery = () => {
    if (!query.trim()) return;

    dispatch(startQuery());
    setLoading(true);

    setTimeout(() => {
      const result = mockResults[query.toLowerCase()] || [0, 0, 0, 0, 0];
      dispatch(setResults(result));
      dispatch(addToHistory(query));
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => dispatch(setQuery(e.target.value))}
        className="border p-2 w-full"
        placeholder="Ask a business question..."
      />
      <button
        onClick={handleQuery}
        className="bg-blue-500 text-white p-2 mt-2 w-full"
        disabled={loading}
      >
        {loading ? "Processing..." : "Submit"}
      </button>
    </div>
  );
};

export default QueryInput;
