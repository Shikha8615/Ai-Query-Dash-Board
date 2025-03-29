import { useSelector } from "react-redux";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const Results = () => {
  const results = useSelector((state) => state.query.results);

  if (!results) return null;

  const data = results.map((value, index) => ({ name: `Point ${index + 1}`, value }));

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Results:</h2>
      <LineChart width={400} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default Results;
