document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INSERIR TELEFONE AQUI:
  const telefono = "+5562995268975";

  const cliente = document.querySelector("#cliente").value;
  const datas = document.querySelector("#datas").value;
  const hora = document.querySelector("#hora").value;
  const empregado = document.querySelector("#empregado").value;
  const servico = document.querySelector("#servico").value;
  const resp = document.querySelector("#respostaempregado");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
        *_TESTE BRASIL_*%0A
        *Reservas*%0A%0A
        *Nome?*%0A
        ${cliente}%0A
        *Data da reservada*%0A
        ${datas}%0A
        *Hora reservada*%0A
        ${hora}%0A
        *Preferência de alguem?*%0A
        ${empregado}%0A
        *Qual é o serviço que pretende realizar?*%0A
        ${servico}`;

  if (cliente === "" || datas === "" || hora === "") {

    resp.classList.add("fail");
    resp.innerHTML = `Preencha todas as informações, ${cliente}`;
    return false;

  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Enviado com Sucesso, ${cliente}`;

  window.open(url);
});