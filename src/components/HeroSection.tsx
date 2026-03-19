import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import nelitoImg from "@/assets/nelito-david.png";

const WHATSAPP_URL = "https://wa.me/5511914860099?text=Olá!%20Vim%20pelo%20site%20da%20Movy%20Soluções%20Financeira%20e%20quero%20atendimento.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(160 72% 40% / 0.3), transparent 70%)" }} />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(43 74% 52% / 0.3), transparent 70%)" }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-body font-medium text-accent tracking-wide uppercase">Especialistas em Recuperação de Crédito</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight mb-6">
              <span className="text-gradient-hero">Recupere seu nome, seu crédito e sua </span>
              <span className="text-gradient-gold">tranquilidade financeira.</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              A Movy Soluções Financeira utiliza inteligência estratégica e suporte humanizado para remover restrições e devolver seu poder de compra. O caminho para o seu novo score começa aqui.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary-glow inline-flex items-center justify-center gap-3 text-base">
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp agora
              </a>
              <a href="#servicos" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-display font-medium transition-all duration-500 hover:border-primary/50 hover:bg-primary/5">
                Conhecer serviços
              </a>
            </div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6 mt-12 justify-center lg:justify-start"
            >
              {["Atuação 100% Legal", "Sigilo Total", "Atendimento Humanizado"].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-xs text-muted-foreground font-body">{badge}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-full blur-3xl opacity-20"
                style={{ background: "radial-gradient(circle, hsl(160 72% 40%), transparent)" }} />
              <img
                src={nelitoImg}
                alt="Nélito David - Especialista em Soluções Financeiras"
                className="relative z-10 w-72 md:w-96 lg:w-[440px] h-auto object-contain drop-shadow-2xl"
                style={{ maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)" }}
              />
              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-16 -left-4 md:left-0 glass-card px-4 py-3 z-20"
              >
                <p className="text-xs font-body text-muted-foreground">Fundador & Especialista</p>
                <p className="text-sm font-display font-semibold text-foreground">Nélito David</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
