import { useSelector } from "react-redux";

const History = () => {
  const history = useSelector((state) => state.query.history);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Query History:</h2>
      <ul>
        {history.map((query, index) => (
          <li key={index} className="border p-2 my-1">{query}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;
