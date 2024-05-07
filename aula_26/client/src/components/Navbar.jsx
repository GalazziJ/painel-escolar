import React from 'react'

function Navbar() {
    return (
        <div class="menu">

        <nav class="navbar navbar-expand-md navbar-dark bg-danger">

            <a href="http://" class="navbar-brand ps-3">Painel</a>


            <div class="collapse navbar-collapse justify-content-center px-3" id="menu">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="http://localhost:3000/" class="nav-link">Início</a>
                    </li>
                    <li class="nav-item">
                        <a href="http://localhost:3000/adicionarUsuario" class="nav-link">Cadastro de usuário</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a href="" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">Interno</a>

                        <ul class="dropdown-menu">
                            <li>
                                <a href="" class="dropdown-item">Trabalhe conosco</a>
                            </li>
                            <li>
                                <a href="" class="dropdown-item">Blog</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="http://localhost:3000/gestaoUsuarios" class="nav-link">Gestão de usuários</a>
                    </li>
                </ul>
            </div>
            <button class="navbar-toggler mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>
    </div>
    )
}

export default Navbar