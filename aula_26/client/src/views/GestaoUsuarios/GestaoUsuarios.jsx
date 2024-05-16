import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function GestaoUsuarios() {
  // estado para armazenar usuários
  const [usuarios, setUsuarios] = useState([]);
  const [alerta, setAlerta] = useState([]);
  const [nome, setNome] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Página de Gerenciamento";
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Efetue login");
      if (!alerta) {
        alert("Efetue login");
        setAlerta(true);
      }
      navigate("/login");
    } else {
      const decodedToken = jwtDecode(token);
      const { usuario_id } = decodedToken;
      carregarUsuarios(token);
      carregarNomeUsuarios(usuario_id)
    }
  });

  async function carregarNomeUsuarios(usuario_id, token) {
    try {
      const resposta = await fetch("usuarios/" + usuario_id, {
        headers: {
          "x-access-token": token,
        },
      });

      const dados = await resposta.json();
      setNome(dados.nome);
    } catch (error) {

    }
  }

  //função para carregar usuários
  async function carregarUsuarios(token) {
    try {
      // faz a chamada para a API através do proxy
      const resposta = await fetch("/usuarios/", {
        headers: {
          "x-access-token": token,
        },
      });

      if (resposta.status === 401) {
        localStorage.removeItem("token");
        alert("Usuário não autenticado");
        navigate("/login");
      } else {
      }

      if (!resposta) {
        throw new Error("Erro requisição:" + resposta.status);
      } else {
        // não é necessário o else
        const dados = await resposta.json();
        setUsuarios(dados);
      }
    } catch (error) {
      console.error("Erro ao buscar os usuários", error);
    }
  }

  //Função de deletar um usuário
  async function deletarUsuario(usuario_id) {
    if (window.confirm("Tem certeza que deseja deletar esse usuário?")) {
      try {
        const resposta = await fetch("/usuarios/" + usuario_id, {
          method: "DELETE",
        });
        if (!resposta.ok) {
          throw new Error("Falha ao deletar usuário");
        } else {
          // não obrigatório
          carregarUsuarios();
        }
      } catch (error) {
        console.error("Erro ao deletar usuários: ", error);
      }
    }
  }

  return (
    <div className="container">
      <h1>Gestão de usuários</h1>

      <table class="table table-striped">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nome</th>
          <th scope="col">Usuario</th>
          <th scope="col">Tipo</th>
          <th scope="col">Ações</th>
        </tr>

        {usuarios.map((usuario) => (
          <tr key={usuario.usuario_id}>
            <td>{usuario.usuario_id}</td>
            <td>{usuario.nome}</td>
            <td>{usuario.usuario}</td>
            <td>{usuario.usuario_tipo}</td>

            <td>
              <button
                onClick={() =>
                  (window.location.href =
                    "/atualizarUsuarios/" + usuario.usuario_id)
                }
                type="button"
                className="btn btn-primary"
              >
                Editar
              </button>
              <button
                onClick={() => deletarUsuario(usuario.usuario_id)}
                className="btn btn-danger"
              >
                Deletar
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default GestaoUsuarios;
