import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Building2, Database, Search, Handshake, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511914860099?text=Olá!%20Vim%20pelo%20site%20da%20Movy%20Soluções%20Financeira%20e%20quero%20atendimento.";

const services = [
  { icon: ShieldCheck, title: "Limpa Nome", description: "Blindagem e exclusão de apontamentos nos órgãos de proteção ao crédito. Recupere sua liberdade financeira." },
  { icon: TrendingUp, title: "Aumento de Score", description: "Estratégias inteligentes para elevar sua pontuação de crédito e abrir portas para novas oportunidades." },
  { icon: Building2, title: "Rating Comercial", description: "Melhore a reputação financeira da sua empresa e conquiste melhores condições no mercado." },
  { icon: Database, title: "Limpa Bacen SCR", description: "Regularização de pendências no Sistema de Informações de Crédito do Banco Central." },
  { icon: Search, title: "Remoção Jusbrasil", description: "Exclusão de registros indesejados que prejudicam sua imagem e credibilidade no mercado." },
  { icon: Handshake, title: "Seja Parceiro", description: "Torne-se um revendedor de serviços de limpa nome e conquiste uma nova fonte de renda." },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-spacing relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-display text-sm font-semibold tracking-widest uppercase mb-4 block">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Soluções sob medida para o <span className="text-gradient-gold">seu caso</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass-card p-8"
            >
              <div className="glass-card-glow" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">{service.description}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-display font-medium text-primary transition-all duration-300 group-hover:gap-3"
                >
                  <MessageCircle className="w-4 h-4" />
                  Solicitar agora
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
