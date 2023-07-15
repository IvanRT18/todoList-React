import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(e);
  };

  const addItem = (e) => {
    const newForm = new FormData(e.target);
    const textoEscrito = newForm.get("input-text");

    if (!textoEscrito) {
      console.log("No se ha escrito nada en el formulario");
      toast.error("No se ha escrito nada en el formulario");
      return;
    }

    const newItem = {
      id: nanoid(),
      name: textoEscrito,
      completed: false,
    };

    const newArray = [...items, newItem];

    setItems(newArray);

    localStorage.setItem("items", JSON.stringify(newArray));

    toast.success(`Item ${newItem.name} agregado`);
  };

  const removeItem = (id, name) => {
    const newItems = items.filter((item) => id !== item.id);

    setItems(newItems);

    localStorage.clear();
    localStorage.setItem("items", JSON.stringify(newItems));

    toast.error(`Item ${name} eliminado`);
  };

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("items")));
  }, []);

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit}>
        <h4>Lista de compras</h4>
        <div className="form-control">
          <input
            type="text"
            name="input-text"
            id="input-text"
            className="form-input"
          />
          <button type="submit" className="btn">
            Enviar
          </button>
        </div>
      </form>
      <Items items={items} removeItem={removeItem} />
      <ToastContainer position="top-center" />
    </section>
  );
};

export default App;
