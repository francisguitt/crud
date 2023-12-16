// import React, { useState, useEffect } from 'react';
// import { Test } from './components/test';

// function App() {
//   // Estado para armazenar os itens
//   const [items, setItems] = useState([]);
//   // Estado para o novo item a ser adicionado ou editado
//   const [newItem, setNewItem] = useState('');
//   // Estado para armazenar o índice do item que está sendo editado
//   const [editingIndex, setEditingIndex] = useState(null);
//   console.log(editingIndex);

//   // Efeito colateral para carregar os itens do localStorage quando o componente é montado
//   useEffect(() => {
//     // Carregar os itens do localStorage quando o componente for montado
//     const storedItems = JSON.parse(localStorage.getItem('items')) || [];
//     // Atualizar o estado 'items' com os itens carregados do localStorage
//     setItems(storedItems);
//   }, []);

//   // Função para adicionar ou editar um item
//   const addItem = () => {
//     // Verificar se o novo item não está vazio
//     if (newItem.trim() !== '') {
//       // Se estiver editando um item existente
//       if (editingIndex !== null) {
//         // Criar uma cópia dos itens
//         const updatedItems = [...items];
//         // Atualizar o item no índice de edição com o novo valor
//         updatedItems[editingIndex] = newItem;
//         // Atualizar o estado 'items' com a lista atualizada
//         setItems(updatedItems);
//         // Atualizar o localStorage com os itens atualizados
//         localStorage.setItem('items', JSON.stringify(updatedItems));
//         // Resetar o índice de edição
//         setEditingIndex(null);
//       } else {
//         // Adicionar um novo item
//         // Criar uma cópia dos itens e adicionar o novo item
//         const updatedItems = [...items, newItem];
//         // Atualizar o estado 'items' com a lista atualizada
//         setItems(updatedItems);
//         // Atualizar o localStorage com os itens atualizados
//         localStorage.setItem('items', JSON.stringify(updatedItems));
//       }
//       // Resetar o novo item
//       setNewItem('');
//     }
//   };

//   // Função para remover um item
//   const removeItem = (index) => {
//     // Criar uma cópia dos itens
//     const updatedItems = [...items];
//     // Remover o item no índice especificado
//     updatedItems.splice(index, 1);
//     // Atualizar o estado 'items' com a lista atualizada
//     setItems(updatedItems);
//     // Atualizar o localStorage com os itens atualizados
//     localStorage.setItem('items', JSON.stringify(updatedItems));
//     // Resetar o índice de edição
//     setEditingIndex(null);
//   };

//   // Função para iniciar a edição de um item
//   const editItem = (index) => {
//     // Definir o novo item com o valor do item selecionado para edição
//     setNewItem(items[index]);
//     // Definir o índice de edição como o índice do item selecionado
//     setEditingIndex(index);
//   };

//   // Renderização do componente
//   return (
//     <div>
//       <h1>CRUD App</h1>
//       {/* Input para adicionar/editar um novo item */}
//       <label htmlFor="itemInput">Novo Item:</label>
//       <input
//         type="text"
//         id="itemInput"
//         value={newItem}
//         onChange={(e) => setNewItem(e.target.value)}
//       />
//       {/* Botão para adicionar/editar um item */}
//       <button onClick={addItem}>
//         {editingIndex !== null ? 'Salvar Edição' : 'Adicionar'}
//       </button>

//       <h2>Itens</h2>
//       {/* Lista de itens com botões de editar/remover */}
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item}
//             <button onClick={() => editItem(index)}>Editar</button>
//             <button onClick={() => removeItem(index)}>Remover</button>
//           </li>
//         ))}
//       </ul>
//       <hr />
//       <Test />
//     </div>
//   );
// }

// export default App;


import { Test } from "./components/test"
const App = () => {
  return (
    <Test />
  )
}

export default App