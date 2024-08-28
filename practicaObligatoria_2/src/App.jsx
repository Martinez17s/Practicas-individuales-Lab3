import Table from './components/Table'



function App() {

  const netIncomes = [{ id: 1 ,brand: 'McDonalds', income: 1291283}, { id: 2 ,brand: 'Burger King', income: 1927361}, { id: 3 ,brand: 'KFC', income: 1098463}];

  const totalIncome = netIncomes.reduce((acc, item) => acc + item.income, 0);

  const averageIncome = totalIncome / netIncomes.length;

  return (
    <div>
        <h2>Net Incomes</h2>
        <Table table={netIncomes}/>
        <p>Average Net Income: ${averageIncome.toFixed(2)}</p>
    </div>
  )
}

export default App
