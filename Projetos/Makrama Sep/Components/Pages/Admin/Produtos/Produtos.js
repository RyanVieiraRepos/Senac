class Produtos extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        
        <div class="pedidosCont">
        <strong>
        teste
        </strong>
        </div>
        `
    }
}customElements.define("main-produtos", Produtos)