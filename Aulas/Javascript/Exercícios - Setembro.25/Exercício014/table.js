class Produtos extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        
         <div class="produtosCont">

      <div class="produtosHead">
        <strong>Produtos</strong>
        <div class="produtosSearchCont">
          <input placeholder="Pesquise">
          <button>Adicionar Produto</button>
          <select>

            <option>Ordem Alfabética</option>
            <option>Preço</option>
            <option>Quantidade de Pedidos</option>
          </select>



        </div>

      </div>

      <div class="tableHead">

        <strong>Vaga</strong>
        
        <strong>Veículo</strong>

        
      </div>


      <div class="table" id="table">
      </div>

    </div>
        `
  }
} customElements.define("dash-produtos", Produtos)