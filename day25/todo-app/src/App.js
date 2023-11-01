import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ name: '', description: '', status: 'Not Completed' });
  const [filterStatus, setFilterStatus] = useState('All');
  const [editingIndex, setEditingIndex] = useState(null);

  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo({ name: '', description: '', status: 'Not Completed' });
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  const updateStatus = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].status = updatedTodos[index].status === 'Not Completed' ? 'Completed' : 'Not Completed';
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setEditingIndex(index);
    const todoToEdit = todos[index];
    setNewTodo({ ...todoToEdit });
  };

  const saveTodo = () => {
    const updatedTodos = [...todos];
    updatedTodos[editingIndex] = newTodo;
    setTodos(updatedTodos);
    setEditingIndex(null);
    setNewTodo({ name: '', description: '', status: 'Not Completed' });
  };

  const filterTodos = () => {
    if (filterStatus === 'All') return todos;
    return todos.filter((todo) => todo.status === filterStatus);
  };

  return (
    <div className="App">
      <h1>My Todo</h1>
      <div className="todo-form">
        <input
          type="text"
          placeholder="Todo Name"
          value={newTodo.name}
          onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newTodo.description}
          onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
        />
        {editingIndex === null ? (
          <button className='Add_Todo' onClick={addTodo}>Add Todo</button>
        ) : (
          <button className='Save_Todo' onClick={saveTodo}>Save Todo</button>
        )}
      </div>
      
      <div className='sub_heading'>
      <h3>My Todos</h3>
      <div className="filter">        
        <label>Status filter:</label>
        <select onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="All">All</option>
          <option value="Not Completed">Not Completed</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      </div>

      <div className="todo-list">
        {filterTodos().map((todo, index) => (
          
          <div key={index} className="product">             
                <h3>Name :{todo.name}</h3>
                <p>Description :{todo.description}</p>            
                <p>Status: {todo.status}</p>

                <div className='button-group'>
                <button className='Change_Status' onClick={() => updateStatus(index)}>Change Status</button>
                {editingIndex === index ? (
                  <button className='Save' onClick={saveTodo}>Save</button>
                ) : (
                  <button className='Edit' onClick={() => editTodo(index)}>Edit</button>
                )}            
                <button className='Delete' onClick={() => deleteTodo(index)}>Delete</button>
                </div>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default App;















// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState({ name: '', description: '', status: 'Not Completed' });
//   const [filterStatus, setFilterStatus] = useState('All');
//   const [editingIndex, setEditingIndex] = useState(null);

//   const addTodo = () => {
//     setTodos([...todos, newTodo]);
//     setNewTodo({ name: '', description: '', status: 'Not Completed' });
//   };

//   const deleteTodo = (index) => {
//     const updatedTodos = todos.filter((todo, i) => i !== index);
//     setTodos(updatedTodos);
//   };

//   const updateStatus = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos[index].status = updatedTodos[index].status === 'Not Completed' ? 'Completed' : 'Not Completed';
//     setTodos(updatedTodos);
//   };

//   const editTodo = (index) => {
//     setEditingIndex(index);
//     const todoToEdit = todos[index];
//     setNewTodo({ ...todoToEdit });
//   };

//   const saveTodo = () => {
//     const updatedTodos = [...todos];
//     updatedTodos[editingIndex] = newTodo;
//     setTodos(updatedTodos);
//     setEditingIndex(null);
//     setNewTodo({ name: '', description: '', status: 'Not Completed' });
//   };

//   const filterTodos = () => {
//     if (filterStatus === 'All') return todos;
//     return todos.filter((todo) => todo.status === filterStatus);
//   };

//   return (
//     <div className="App">
//       <h1>Todo App</h1>
//       <div className="todo-form">
//         <input
//           type="text"
//           placeholder="Todo Name"
//           value={newTodo.name}
//           onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={newTodo.description}
//           onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
//         />
//         {editingIndex === null ? (
//           <button onClick={addTodo}>Add Todo</button>
//         ) : (
//           <button onClick={saveTodo}>Save Todo</button>
//         )}
//       </div>
//       <div className="filter">
//         <label>Filter by Status:</label>
//         <select onChange={(e) => setFilterStatus(e.target.value)}>
//           <option value="All">All</option>
//           <option value="Not Completed">Not Completed</option>
//           <option value="Completed">Completed</option>
//         </select>
//       </div>
//       <div className="todo-list">
//         {filterTodos().map((todo, index) => (
//           <div key={index} className="todo-card">
//             {editingIndex === index ? (
//               <>
//                 <input
//                   type="text"
//                   value={newTodo.name}
//                   onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
//                 />
//                 <input
//                   type="text"
//                   value={newTodo.description}
//                   onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
//                 />
//               </>
//             ) : (
//               <>
//                 <h3>{todo.name}</h3>
//                 <p>{todo.description}</p>
//               </>
//             )}
//             <p>Status: {todo.status}</p>
//             {editingIndex === index ? (
//               <button onClick={saveTodo}>Save</button>
//             ) : (
//               <button onClick={() => editTodo(index)}>Edit</button>
//             )}
//             <button onClick={() => updateStatus(index)}>Change Status</button>
//             <button onClick={() => deleteTodo(index)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;










// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState({ name: '', description: '', status: 'Not Completed' });
//   const [filterStatus, setFilterStatus] = useState('All');
//   const [editingIndex, setEditingIndex] = useState(null);

//   const addTodo = () => {
//     setTodos([...todos, newTodo]);
//     setNewTodo({ name: '', description: '', status: 'Not Completed' });
//   };

//   const deleteTodo = (index) => {
//     const updatedTodos = todos.filter((todo, i) => i !== index);
//     setTodos(updatedTodos);
//   };

//   const updateStatus = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos[index].status = updatedTodos[index].status === 'Not Completed' ? 'Completed' : 'Not Completed';
//     setTodos(updatedTodos);
//   };

//   const editTodo = (index) => {
//     setEditingIndex(index);
//   };

//   const saveTodo = () => {
//     const updatedTodos = [...todos];
//     updatedTodos[editingIndex] = newTodo;
//     setTodos(updatedTodos);
//     setEditingIndex(null);
//     setNewTodo({ name: '', description: '', status: 'Not Completed' });
//   };

//   const filterTodos = () => {
//     if (filterStatus === 'All') return todos;
//     return todos.filter((todo) => todo.status === filterStatus);
//   };

//   return (
//     <div className="App">
//       <h1>Todo App</h1>
//       <div className="todo-form">
//         <input
//           type="text"
//           placeholder="Todo Name"
//           value={newTodo.name}
//           onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={newTodo.description}
//           onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
//         />
//         {editingIndex === null ? (
//           <button onClick={addTodo}>Add Todo</button>
//         ) : (
//           <button onClick={saveTodo}>Save Todo</button>
//         )}
//       </div>
//       <div className="filter">
//         <label>Filter by Status:</label>
//         <select onChange={(e) => setFilterStatus(e.target.value)}>
//           <option value="All">All</option>
//           <option value="Not Completed">Not Completed</option>
//           <option value="Completed">Completed</option>
//         </select>
//       </div>
//       <div className="todo-list">
//         {filterTodos().map((todo, index) => (
//           <div key={index} className="todo-card">
//             {editingIndex === index ? (
//               <>
//                 <input
//                   type="text"
//                   value={newTodo.name}
//                   onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
//                 />
//                 <input
//                   type="text"
//                   value={newTodo.description}
//                   onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
//                 />
//               </>
//             ) : (
//               <>
//                 <h3>{todo.name}</h3>
//                 <p>{todo.description}</p>
//               </>
//             )}
//             <p>Status: {todo.status}</p>
//             {editingIndex === index ? (
//               <button onClick={saveTodo}>Save</button>
//             ) : (
//               <button onClick={() => editTodo(index)}>Edit</button>
//             )}
//             <button onClick={() => updateStatus(index)}>Change Status</button>
//             <button onClick={() => deleteTodo(index)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;











// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState({ name: '', description: '', status: 'Not Completed' });
//   const [filterStatus, setFilterStatus] = useState('All');

//   const addTodo = () => {
//     setTodos([...todos, newTodo]);
//     setNewTodo({ name: '', description: '', status: 'Not Completed' });
//   };

//   const deleteTodo = (index) => {
//     const updatedTodos = todos.filter((todo, i) => i !== index);
//     setTodos(updatedTodos);
//   };

//   const updateStatus = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos[index].status = updatedTodos[index].status === 'Not Completed' ? 'Completed' : 'Not Completed';
//     setTodos(updatedTodos);
//   };

//   const filterTodos = () => {
//     if (filterStatus === 'All') return todos;
//     return todos.filter((todo) => todo.status === filterStatus);
//   };

//   return (
//     <div className="App">
//       <h1>Todo App</h1>
//       <div className="todo-form">
//         <input
//           type="text"
//           placeholder="Todo Name"
//           value={newTodo.name}
//           onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={newTodo.description}
//           onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
//         />
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <div className="filter">
//         <label>Filter by Status:</label>
//         <select onChange={(e) => setFilterStatus(e.target.value)}>
//           <option value="All">All</option>
//           <option value="Not Completed">Not Completed</option>
//           <option value="Completed">Completed</option>
//         </select>
//       </div>
//       <div className="todo-list">
//         {filterTodos().map((todo, index) => (
//           <div key={index} className="todo-card">
//             <h3>{todo.name}</h3>
//             <p>{todo.description}</p>
//             <p>Status: {todo.status}</p>
//             <button onClick={() => updateStatus(index)}>Change Status</button>
//             <button onClick={() => deleteTodo(index)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;














// import React, {useState, useEffect} from 'react';
// import './App.css';
// import {AiOutlineDelete} from 'react-icons/ai';
// import {BsCheckLg} from 'react-icons/bs';


// function App () {
//   const [allTodos, setAllTodos] = useState ([]);
//   const [newTodoTitle, setNewTodoTitle] = useState ('');
//   const [newDescription, setNewDescription] = useState ('');
//   const [completedTodos, setCompletedTodos] = useState ([]);
//   const [isCompletedScreen, setIsCompletedScreen] = useState(null);

//   const handleAddNewToDo = () => {
//     let newToDoObj = {
//       title: newTodoTitle,
//       description: newDescription,
//     };
//     // console.log (newToDoObj);
//     let updatedTodoArr = [...allTodos];
//     updatedTodoArr.push (newToDoObj);
//     // console.log (updatedTodoArr);
//     setAllTodos (updatedTodoArr);
//     localStorage.setItem ('todolist', JSON.stringify (updatedTodoArr));
//     setNewDescription ('');
//     setNewTodoTitle ('');
//   };

//   useEffect (() => {
//     let savedTodos = JSON.parse (localStorage.getItem ('todolist'));
//     let savedCompletedToDos = JSON.parse (
//       localStorage.getItem ('completedTodos')
//     );
//     if (savedTodos) {
//       setAllTodos (savedTodos);
//     }

//     if (savedCompletedToDos) {
//       setCompletedTodos (savedCompletedToDos);
//     }
//   }, []);

//   const handleToDoDelete = index => {
//     let reducedTodos = [...allTodos];
//     reducedTodos.splice(index, 1); // Remove 1 item at the given index
//     localStorage.setItem('todolist', JSON.stringify(reducedTodos));
//     setAllTodos(reducedTodos);
//   };
  
//   const handleCompletedTodoDelete = index => {
//     let reducedCompletedTodos = [...completedTodos];
//     reducedCompletedTodos.splice(index, 1); // Remove 1 item at the given index
//     localStorage.setItem('completedTodos', JSON.stringify(reducedCompletedTodos));
//     setCompletedTodos(reducedCompletedTodos);
//   };
  

//   const handleComplete = index => {
//     // const date = new Date ();
//     // var dd = date.getDate ();
//     // var mm = date.getMonth () + 1;
//     // var yyyy = date.getFullYear ();
//     // var hh = date.getHours ();
//     // var minutes = date.getMinutes ();
//     // var ss = date.getSeconds ();
//     // var finalDate =
//     //   dd + '-' + mm + '-' + yyyy + ' at ' + hh + ':' + minutes + ':' + ss;

//     let filteredTodo = {
//       ...allTodos[index],
//       // completedOn: finalDate,
//     };

//     // console.log (filteredTodo);

//     let updatedCompletedList = [...completedTodos, filteredTodo];
//     console.log (updatedCompletedList);
//     setCompletedTodos (updatedCompletedList);
//     localStorage.setItem (
//       'completedTodos',
//       JSON.stringify (updatedCompletedList)
//     );
//     // console.log (index);

//     handleToDoDelete (index);
//   };

//   return (
//     <div className="App">
//       <h1>My Todo</h1>

//       <div className="todo-wrapper">

//         <div className="todo-input">
//           <div className="todo-input-item">
            
//             <input
//               type="text"
//               value={newTodoTitle}
//               onChange={e => setNewTodoTitle (e.target.value)}
//               placeholder="Todo Name"
//             />
//           </div>
//           <div className="todo-input-item">
            
//             <input
//               type="text"
//               value={newDescription}
//               onChange={e => setNewDescription (e.target.value)}
//               placeholder="Todo Description"
//             />
//           </div>
//           <div className="todo-input-item">
//             <button
//               className="primary-btn"
//               type="button"
//               onClick={handleAddNewToDo}
//             >
//               Add Todo
//             </button>
//           </div>
//         </div>
//         <div className="btn-area">
//   <button
//     className={`secondaryBtn ${isCompletedScreen === null ? 'active' : ''}`}
//     onClick={() => setIsCompletedScreen(null)}
//   >
//     All
//   </button>
//   <button
//     className={`secondaryBtn ${isCompletedScreen === false ? 'active' : ''}`}
//     onClick={() => setIsCompletedScreen(false)}
//   >
//     Not Completed
//   </button>
//   <button
//     className={`secondaryBtn ${isCompletedScreen === true ? 'active' : ''}`}
//     onClick={() => setIsCompletedScreen(true)}
//   >
//     Completed
//   </button>
// </div>

// <div className="todo-list">

//   {isCompletedScreen === null && (
//     allTodos.map((item, index) => (
//       <div className="todo-list-item" key={index}>
//         <div>
//           <h3>{item.title}</h3>
//           <p>{item.description}</p>
//         </div>
//         <div>
//           <AiOutlineDelete
//             title="Delete?"
//             className="icon"
//             onClick={() => handleToDoDelete(index)}
//           />
//           <BsCheckLg
//             title="Completed?"
//             className="check-icon"
//             onClick={() => handleComplete(index)}
//           />
//         </div>
//       </div>
//     ))
//   )}

//   {isCompletedScreen === false && (
//     allTodos.map((item, index) => (
//       <div className="todo-list-item" key={index}>
//         <div>
//           <h3>{item.title}</h3>
//           <p>{item.description}</p>
//         </div>
//         <div>
//           <AiOutlineDelete
//             title="Delete?"
//             className="icon"
//             onClick={() => handleToDoDelete(index)}
//           />
//           <BsCheckLg
//             title="Completed?"
//             className="check-icon"
//             onClick={() => handleComplete(index)}
//           />
//         </div>
//       </div>
//     ))
//   )}

//   {isCompletedScreen === true && (
//     completedTodos.map((item, index) => (
//       <div className="todo-list-item" key={index}>
//         <div>
//           <h3>{item.title}</h3>
//           <p>{item.description}</p>
//         </div>
//         <div>
//           <AiOutlineDelete
//             className="icon"
//             onClick={() => handleCompletedTodoDelete(index)}
//           />
//         </div>
//       </div>
//     ))
//   )}
// </div>

//       </div>
//     </div>
//   );
// }

// export default App;
