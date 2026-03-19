import { motion } from "framer-motion";
import movyLogo from "@/assets/movy-logo.png";

const WHATSAPP_URL = "https://wa.me/5511914860099?text=Olá!%20Vim%20pelo%20site%20da%20Movy%20Soluções%20Financeira%20e%20quero%20atendimento.";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50"
      style={{ background: "hsla(210, 18%, 2.5%, 0.85)", backdropFilter: "blur(20px)" }}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <img src={movyLogo} alt="Movy Soluções Financeira" className="h-10 md:h-12 w-auto" />
        
        <nav className="hidden md:flex items-center gap-8">
          {["Serviços", "Benefícios", "Sobre", "Depoimentos"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold text-sm px-6 py-2.5">
          Atendimento VIP
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
