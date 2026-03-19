import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511914860099?text=Olá!%20Vim%20pelo%20site%20da%20Movy%20Soluções%20Financeira%20e%20quero%20atendimento.";

const CTASection = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(160 72% 40%), transparent 70%)" }} />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Não adie a solução da sua <span className="text-gradient-gold">vida financeira</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed mb-10">
            Fale agora com a Movy Soluções Financeira e descubra a melhor solução para o seu caso. Cada dia conta na sua recuperação.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-glow inline-flex items-center justify-center gap-3 text-lg px-10 py-5"
          >
            <MessageCircle className="w-6 h-6" />
            Falar no WhatsApp agora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
