import { motion } from "framer-motion";
import nelitoImg from "@/assets/nelito-david.png";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-spacing">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl border border-accent/20 -rotate-3" />
              <div className="absolute -inset-4 rounded-3xl border border-primary/20 rotate-2" />
              <img
                src={nelitoImg}
                alt="Nélito David"
                className="relative z-10 rounded-2xl w-72 md:w-80 h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-accent font-display text-sm font-semibold tracking-widest uppercase mb-4 block">Sobre Nós</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              A Movy & <span className="text-gradient-gold">Nélito David</span>
            </h2>
            <div className="space-y-5 text-muted-foreground font-body leading-relaxed">
              <p>
                Não somos apenas uma consultoria — somos o seu braço direito na retomada da liberdade econômica. A <strong className="text-foreground">Movy Soluções Financeira</strong> nasceu com o propósito de humanizar a recuperação de crédito e oferecer soluções reais.
              </p>
              <p>
                Com anos de experiência no mercado financeiro, <strong className="text-foreground">Nélito David</strong> fundou a Movy com um único propósito: oferecer soluções reais onde outros enxergam apenas números. Sua abordagem combina estratégia financeira com atendimento próximo e comprometido.
              </p>
              <p>
                Cada cliente é tratado como único, com análise personalizada e acompanhamento dedicado do início ao fim do processo. Nosso compromisso é com resultados concretos e com a sua paz financeira.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
