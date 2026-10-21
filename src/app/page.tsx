import { ArrowRight, Heart, Menu, Search, ShoppingBag, Truck, ShieldCheck, Sparkles } from "lucide-react";

const categories = [
  { icon: "🐕", name: "Para cães", desc: "Passeios e brincadeiras" },
  { icon: "🐈", name: "Para gatos", desc: "Conforto e diversão" },
  { icon: "🛏️", name: "Conforto", desc: "Cantinhos especiais" },
  { icon: "🎀", name: "Acessórios", desc: "Detalhes que encantam" },
];
const products = [
  { icon: "🧺", tag: "Mais querido", name: "Caminha aconchego", price: "R$ 129,90", installment: "ou 3x de R$ 43,30" },
  { icon: "🦮", tag: "Dia a dia", name: "Kit passeio elegante", price: "R$ 79,90", installment: "ou 2x de R$ 39,95" },
  { icon: "🐾", tag: "Novidade", name: "Tapete de descanso", price: "R$ 89,90", installment: "ou 3x de R$ 29,97" },
  { icon: "🪀", tag: "Diversão", name: "Brinquedo interativo", price: "R$ 39,90", installment: "ou 1x de R$ 39,90" },
];

export default function Home() {
  return <>
    <div className="announcement">UM CARINHO A MAIS EM CADA PEDIDO · CONHEÇA A YVESPET</div>
    <header className="site-wrap header">
      <button className="icon-btn mobile-menu" aria-label="Abrir menu"><Menu size={18}/></button>
      <a className="logo" href="#inicio">Yves<span>Pet</span>.</a>
      <nav className="nav" aria-label="Navegação principal"><a href="#categorias">Categorias</a><a href="#favoritos">Mais queridos</a><a href="#sobre">Nossa essência</a></nav>
      <div className="actions"><button className="icon-btn" aria-label="Buscar"><Search size={17}/></button><button className="icon-btn" aria-label="Favoritos"><Heart size={17}/></button><button className="icon-btn" aria-label="Sacola de compras"><ShoppingBag size={17}/></button></div>
    </header>
    <main className="site-wrap" id="inicio">
      <section className="hero">
        <div className="hero-copy"><span className="eyebrow">O amor mora nos detalhes</span><h1>Para quem faz parte da família.</h1><p>Uma seleção especial de pequenos cuidados e grandes momentos para deixar a vida com seu pet ainda mais gostosa.</p><a className="btn" href="#favoritos">Descobrir favoritos <ArrowRight size={15}/></a></div>
        <div className="hero-art" role="img" aria-label="Ilustração em tons naturais para a YvesPet"><div className="pet-illustration">🐕</div><div className="art-label">Cuidado que faz bem.</div></div>
      </section>
      <section id="categorias"><div className="section-head"><div><span className="eyebrow">Encontre o que combina</span><h2>Um mundo de carinho</h2></div><a className="muted" href="#favoritos">Ver seleção <ArrowRight size={13} style={{display:"inline",verticalAlign:"middle"}}/></a></div><div className="categories">{categories.map((c)=><a className="category" href="#favoritos" key={c.name}><div className="category-icon">{c.icon}</div><strong>{c.name}</strong><span className="muted">{c.desc}</span></a>)}</div></section>
      <section id="favoritos"><div className="section-head"><div><span className="eyebrow">Escolhas especiais</span><h2>Queridinhos da YvesPet</h2><p className="muted">Pequenos detalhes para uma rotina cheia de afeto.</p></div><a className="muted" href="#categorias">Explorar todos <ArrowRight size={13} style={{display:"inline",verticalAlign:"middle"}}/></a></div><div className="products">{products.map((p)=><article className="product" key={p.name}><div className="product-photo"><span className="tag">{p.tag}</span><span aria-hidden="true">{p.icon}</span></div><h3>{p.name}</h3><div className="price">{p.price}</div><div className="installment">{p.installment}</div></article>)}</div></section>
      <section className="story" id="sobre"><div className="story-art" aria-hidden="true">🐈</div><div><span className="eyebrow">Nossa essência</span><h2>Mais que produtos. Mais cuidado.</h2><p>Acreditamos que nossos pets merecem fazer parte de cada detalhe da casa e da rotina. Por isso, queremos reunir produtos úteis, bonitos e escolhidos com carinho.</p><a className="btn" href="#categorias">Conheça a YvesPet <ArrowRight size={15}/></a></div></section>
      <section className="benefits"><div><div className="benefit-icon"><Truck size={25} strokeWidth={1.4}/></div><h3>Entrega acompanhada</h3><p>Informações claras sobre o envio do seu pedido.</p></div><div><div className="benefit-icon"><ShieldCheck size={25} strokeWidth={1.4}/></div><h3>Compra com tranquilidade</h3><p>Atendimento próximo para ajudar quando precisar.</p></div><div><div className="benefit-icon"><Sparkles size={25} strokeWidth={1.4}/></div><h3>Escolhas com carinho</h3><p>Produtos selecionados para o dia a dia dos pets.</p></div></section>
    </main>
    <footer className="footer"><div className="site-wrap footer-inner"><div><a className="logo" href="#inicio">YvesPet.</a><p>Cuidado que faz bem. Para todos os momentos juntos.</p></div><p>© {new Date().getFullYear()} YvesPet · Feito com carinho.</p></div></footer>
  </>;
}
