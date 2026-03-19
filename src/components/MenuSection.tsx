import { motion } from "framer-motion";

const WHATSAPP_BASE = "https://wa.me/5511914860099?text=";

const options = [
  { num: 1, label: "Limpa Nome", msg: "Olá! Tenho interesse no serviço de Limpa Nome." },
  { num: 2, label: "Aumento de Score", msg: "Olá! Tenho interesse no serviço de Aumento de Score." },
  { num: 3, label: "Rating Comercial", msg: "Olá! Tenho interesse no serviço de Rating Comercial." },
  { num: 4, label: "Limpa Bacen SCR", msg: "Olá! Tenho interesse no serviço de Limpa Bacen SCR." },
  { num: 5, label: "Remoção Jusbrasil", msg: "Olá! Tenho interesse no serviço de Remoção Jusbrasil." },
  { num: 6, label: "Quero ser parceiro", msg: "Olá! Quero ser parceiro e revender limpa nome." },
];

const MenuSection = () => {
  return (
    <section className="section-spacing relative">
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-accent font-display text-sm font-semibold tracking-widest uppercase mb-4 block">Atendimento Inteligente</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Como podemos <span className="text-gradient-gold">ajudar?</span>
          </h2>
          <p className="text-muted-foreground font-body">
            Movy Soluções Financeira agradece seu contato. Escolha o serviço desejado e fale diretamente com um especialista.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {options.map((opt, i) => (
            <motion.a
              key={opt.num}
              href={`${WHATSAPP_BASE}${encodeURIComponent(opt.msg)}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group glass-card p-6 flex items-center gap-5 cursor-pointer"
            >
              <div className="glass-card-glow" />
              <span className="relative z-10 flex-shrink-0 w-12 h-12 rounded-xl border border-accent/30 flex items-center justify-center font-display text-xl font-bold text-accent group-hover:bg-accent/10 transition-colors duration-300">
                {opt.num}
              </span>
              <span className="relative z-10 font-display font-semibold text-foreground text-sm">{opt.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
