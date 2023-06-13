import { useContext, useState } from "react";
import { BlocContext } from "../Context/blocContext";
import "../style/formStyle.css";

function BlocForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { keyId, setKeyId, CreateNote } = useContext(BlocContext);

  const HandleSubmit = (e) => {
    e.preventDefault();
    CreateNote({
      id: setKeyId(keyId + 1),
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <section>
      <h1 className="form_title">BLOCO DE NOTAS</h1>
      <form className="form" onSubmit={HandleSubmit}>
        <input
          className="form_input"
          placeholder="Digite seu título "
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <textarea
          className="form_textarea"
          placeholder="Faça uma descrição "
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
        <button className="form_button">Enviar</button>
      </form>
    </section>
  );
}
export default BlocForm;
