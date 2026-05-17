import { useEffect } from "react";
import Card from "./Card";
import InfoBox from "./InfoBox";

export default function Home() {
  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const binary = ['0', '1'];
    let fontSize = window.innerWidth < 700 ? 14 : 20;
    let columns, drops;

    function setupMatrix() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(0).map(() => Math.random() * canvas.height / fontSize);
    }

    function drawMatrix() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = fontSize + "px monospace";
      ctx.fillStyle = "#00ff00";
      for (let i = 0; i < drops.length; i++) {
        const text = binary[Math.floor(Math.random() * binary.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    setupMatrix();
    const interval = setInterval(drawMatrix, 40);
    window.addEventListener('resize', setupMatrix);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', setupMatrix);
    };
  }, []);

  const cards = [
    {
      link: "paginas/01.html",
      img: "academy/recursos/01.front.png",
      alt: "Front End"
    },
    {
      link: "temas/backend.html",
      img: "img/temas/backend.png",
      alt: "Back End"
    },
    {
      link: "#",
      img: "img/temas/bancodedados.png",
      alt: "Banco de Dados"
    },
    {
      link: "#",
      img: "img/temas/redes.png",
      alt: "Redes"
    },
    {
      link: "#",
      img: "img/temas/montagemdepc.png",
      alt: "Montagem de PC"
    },
    {
      link: "#",
      img: "img/temas/mobile.png",
      alt: "Mobile"
    },
    {
      link: "#",
      img: "img/temas/arearfiscal.png",
      alt: "Área Fiscal"
    }
  ];

  const infos = [
    {
      icon: "🎓",
      title: "APRENDA DO SEU JEITO",
      text: "Conteúdo direto, prático e atualizado constantemente."
    },
    {
      icon: "🎯",
      title: "FOCO NA PRÁTICA",
      text: "Projetos reais para aplicar seus conhecimentos."
    },
    {
      icon: "📈",
      title: "EVOLUA SEMPRE",
      text: "Do básico ao avançado no seu ritmo."
    },
    {
      icon: "🔒",
      title: "COMUNIDADE EXCLUSIVA",
      text: "Tire dúvidas e compartilhe conhecimento."
    },
    {
      icon: "🏆",
      title: "PREPARE-SE PARA O FUTURO",
      text: "Habilidades que o mercado realmente valoriza."
    }
  ];

  return (
    <>
      {/* MATRIX BACKGROUND */}
      <canvas id="matrix-canvas" className="matrix" />

      {/* HEADER */}
      <header className="topo">
        <h1>
          GUEDESSEC <span>ACADEMY</span>
        </h1>
        <p>Escolha um tema para começar seus estudos.</p>
      </header>

      {/* CARDS */}
      <main className="carousel-wrapper">
        <section className="cards" id="academy-carousel">
          {cards.map((item, i) => (
            <Card
              key={i}
              link={item.link}
              img={item.img}
              alt={item.alt}
            />
          ))}
        </section>
      </main>

      {/* INFOS */}
      <section className="infos">
        {infos.map((item, i) => (
          <InfoBox
            key={i}
            icon={item.icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </section>
    </>
  );
}