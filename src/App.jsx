import { useEffect, useState } from "react";
import { Inputs } from "./components/Inputs/index.jsx";
import { Buttons } from "./components/Buttons/index.jsx";


const App = () => {
  const [items, setItems] = useState([]);
  const [newItems, setNewItems] = useState("");
  const [editItemsIndex, setEditItemsIndex] = useState(null);

  useEffect(() => {
    const dataItemsLocalStorage = JSON.parse(localStorage.getItem('items')) || [];
    setItems(dataItemsLocalStorage);
  }, [])


  const saveLocalStorage = (dataItems) => {
    console.log(dataItems);
    localStorage.setItem('items', JSON.stringify(dataItems));

  }

  const addItem = () => {
    if (newItems.trim() !== "") {
      if (editItemsIndex !== null) {
        const updatedItems = [...items];
        updatedItems[editItemsIndex] = newItems;
        setItems(updatedItems);
        saveLocalStorage(updatedItems);
        setEditItemsIndex(null);
      } else {
        const updatedItems = [...items, newItems];
        setItems(updatedItems);
        saveLocalStorage(updatedItems);

      }
      setNewItems("");
    }

  }

  const removeItems = (id) => {
    const updatedItems = [...items];
    updatedItems.splice(id, 1);
    setItems(updatedItems);
    saveLocalStorage(updatedItems);
    saveLocalStorage(updatedItems)
    setEditItemsIndex(null);
  }

  const editItems = (id) => {
    setNewItems(items[id]);
    setEditItemsIndex(id);
  }

  return (
    <>
      <h1>Tela Cadastro</h1>


      <Inputs
        setItems={setItems}
        editItemsIndex={editItemsIndex}
        setNewItems={setNewItems}
        newItems={newItems}
        addItem={addItem}
      />

      <div className="content">
        <h3>Ações</h3>
        {
          items.map((item, id) => (
            <div key={id}
              className="content-actions">
              <p>{item}</p>
              <Buttons
                id={id}
                editItems={editItems}
                removeItems={removeItems}
              />
            </div>
          ))

        }
      </div>



    </>
  )
}

export default App
