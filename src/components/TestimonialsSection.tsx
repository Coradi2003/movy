import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Carlos M.", location: "São Paulo, SP", text: "A Movy resolveu minha situação em poucos dias. Meu nome estava negativado há anos e achei que nunca ia conseguir sair dessa. Profissionais incríveis!" },
  { name: "Fernanda L.", location: "Rio de Janeiro, RJ", text: "Atendimento humanizado de verdade. Me senti acolhida e segura durante todo o processo. Meu score subiu mais de 200 pontos!" },
  { name: "Roberto S.", location: "Belo Horizonte, MG", text: "Empresa séria e comprometida. O Nélito me acompanhou pessoalmente e fez tudo com transparência. Recomendo a todos." },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="section-spacing relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-4 block">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Quem já <span className="text-gradient-hero">confiou na Movy</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card p-8"
            >
              <div className="glass-card-glow" />
              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground font-body">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
