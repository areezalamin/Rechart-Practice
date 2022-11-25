import logo from './logo.svg';
import './App.css';
import MyLineChart from './Component/MyLineChart/MyLineChart';
import MyPieChart from './Component/MyPieChart/MyPieChart';

function App() {
  return (
    <div>
      <h1 className='text-center font-weight:700 text-stone-500 text-3xl'>
        This is Prcticing for Tailwind and Recharts.
      </h1>
      <MyLineChart></MyLineChart>
      <MyPieChart></MyPieChart>
    </div>
  );
}

export default App;
