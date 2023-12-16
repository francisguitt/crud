import { useEffect, useState } from "react";

export const Test = () => {

    const [items, setItems] = useState([]);
    const [newItems, setNewItems] = useState('');
    const [edditingIndex, setEdditingIndex] = useState(null);

    useEffect(() => {
        const storageItems = JSON.parse(localStorage.getItem('items')) || [];
        setItems(storageItems);
    }, []);

    const addItem = () => {
        if (newItems.trim() !== '') {
            if (edditingIndex !== null) {
                const updateItems = [...items];
                updateItems[edditingIndex] = newItems;
                setItems(updateItems);
                localStorage.setItem('items', JSON.stringify(updateItems));
                setEdditingIndex(null);
            } else {
                const updatedItems = [...items, newItems];
                setItems(updatedItems);
                localStorage.setItem('items', JSON.stringify(updatedItems));
            }
            setNewItems('');
        }
    }

    const removeItem = (id) => {
        const updatedItems = [...items];
        updatedItems.splice(id, 1);
        setItems(updatedItems);
        localStorage.setItem('items', JSON.stringify(updatedItems));
        setEdditingIndex(null);
    }

    const edditItem = (id) => {
        setNewItems(items[id]);
        setEdditingIndex(id);
    }


    return (
        <>
            <h2>Crud</h2>
            <label htmlFor="itemIput">Campo</label>
            <input
                type="text"
                id="itemInput"
                value={newItems}
                onChange={(e) => setNewItems(e.target.value)}
            />
            <button onClick={addItem}>{edditingIndex !== null ? "Salvar" : "Adicionar"}</button>

            {
                items.map((item, id) => (
                    <div key={id}>
                        <li>{item}</li>
                        <button onClick={() => edditItem(id)} >Editar</button>
                        <button onClick={() => removeItem(id)} >Remover</button>
                    </div>
                ))
            }

        </>
    )
}
