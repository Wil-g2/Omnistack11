import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./styles.css";
import api from "../../services/api";

import logo from "../../assets/img/logo.svg";

export default function NewIncident() {
  const ongId = localStorage.getItem("ongId");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const data = {
        title,
        description,
        value
      };
      const response = await api.post("incidents", data, {
        headers: {
          Autorization: ongId
        }
      });
      alert("Caso cadastrado com sucesso");
      formClear();
    } catch (err) {
      alert("Erro ao tentar cadastrar um caso tente novamente.");
    }
  }

  function formClear() {
    setTitle("");
    setDescription("");
    setValue("");
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero" />

          <h1>Cadastro novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Título do caso"
          />
          <textarea
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Descrição"
          />
          <input
            type="number"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Valor em reais"
          />

          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
