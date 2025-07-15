function adicionarIntegrante(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const cargo = document.getElementById("cargo").value;
    const descricao = document.getElementById("descricao").value;

    const cartao = document.createElement("div");
    cartao.className = "cartao";

    cartao.innerHTML = `
      <h3>${nome}</h3>
      <p><strong>Função:</strong> ${cargo}</p>
      <p>${descricao}</p>
    `;

    document.getElementById("cartoes").appendChild(cartao);

    document.getElementById("nome").value = "";
    document.getElementById("cargo").value = "";
    document.getElementById("descricao").value = "";
}