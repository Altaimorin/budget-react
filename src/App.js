import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import MainHeader from './components/Mainheader';
import NewEntryForm from './components/NewEntryForm';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';

function App() {
  let initialEntries = [
    {
      id: 1,
      description: "Work income",
      value: 1000.00,
      isExpense: false
    },
    {
      id: 2,
      description: "Water bill",
      value: 20.00,
      isExpense: true
    },
    {
      id: 3,
      description: "Rent",
      value: 300,
      isExpense: true
    },
    {
      id: 4,
      description: "Power bill",
      value: 50,
      isExpense: true
    }
  ]
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!isOpen && entryId) {
      console.log("entryId:", entryId)
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value))
      }
      return (totalIncomes += Number(entry.value))
    })
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncomes);
    setTotal(totalIncomes - totalExpenses);
  },[entries])

  const resetEntry = () => {
    setDescription('');
    setValue('');
    setIsExpense(false);
  }

  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  }

  const editEntry = (id) => {
    console.log(`edit entry with id ${id}`);
    if (id) {
      const index = entries.findIndex(entry => entry.id === id)
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  const addEntry = () => {
    const result = [...entries, {
      id: entries.length + 1,
      description,
      value,
      isExpense,
    }]
    setEntries(result);
    resetEntry();
  }

  return (
    <Container>

      <MainHeader title='Budget' />
      <DisplayBalance title="Your Balance" value={total} size="small" />

      <DisplayBalances income={incomeTotal} expense={expenseTotal}/>
      <MainHeader title="History" type='h3' />

      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm
        addEntry={addEntry}
        setDescription={setDescription}
        setValue={setValue}
        description={description}
        value={value}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        setDescription={setDescription}
        setValue={setValue}
        description={description}
        value={value}
        isExpense={isExpense}
        setIsExpense={setIsExpense} />
    </Container>
  );
}

export default App;
