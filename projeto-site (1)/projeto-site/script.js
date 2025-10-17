

// API CADASTRO  
function enviar() {
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;
      const role = document.getElementById("hospede").value;

      axios.post("http://127.0.0.1:8000/auth/register",{ 
        nome: nome,
        email: email,
        senha: senha,
        role: role
       })
        .then(response => {
          document.getElementById("resposta").innerText = response.data.mensagem;
        })
        .catch(error => {
          console.error("Erro:", error);
          document.getElementById("resposta").innerText = "Erro ao conectar com a API.";
        });
    }


    // API LOGIN 
    function enviar(event) {
      event.preventDefault(); // Impede o envio padrão do formulário

      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;
      const resposta = document.getElementById("resposta");

      const dados = new URLSearchParams();
      dados.append("username", email);
      dados.append("password", senha);

      axios.post("http://127.0.0.1:8000/auth/login", dados, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(response => {
        resposta.style.color = "green";
        resposta.innerText = "Login realizado com sucesso!";
        console.log("Token:", response.data.access_token);
      })
      .catch(error => {
        resposta.style.color = "red";
        resposta.innerText = "Usuário ou senha inválidos.";
        console.error("Erro:", error.response?.data || error.message);
      });
    }