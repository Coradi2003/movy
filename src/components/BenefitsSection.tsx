import { motion } from "framer-motion";
import { Zap, UserCheck, CreditCard, Award, HeartHandshake, Target } from "lucide-react";

const benefits = [
  { icon: Zap, title: "Atendimento Rápido", desc: "Respostas ágeis e prazos transparentes." },
  { icon: UserCheck, title: "Solução Personalizada", desc: "Cada caso é analisado individualmente." },
  { icon: CreditCard, title: "Mais Chances de Crédito", desc: "Reconquiste o acesso a financiamentos." },
  { icon: Award, title: "Credibilidade Financeira", desc: "Restaure sua reputação no mercado." },
  { icon: HeartHandshake, title: "Suporte Humanizado", desc: "Atendimento próximo e com empatia." },
  { icon: Target, title: "Estratégia Financeira", desc: "Planejamento para reorganização completa." },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="section-spacing">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-4 block">Por que escolher a Movy</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Benefícios que fazem a <span className="text-gradient-hero">diferença</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex gap-5 items-start"
            >
              <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
