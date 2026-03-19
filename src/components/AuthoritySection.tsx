import { motion } from "framer-motion";
import { ShieldCheck, Eye, ClipboardCheck, Users, Lightbulb, Lock } from "lucide-react";

const pillars = [
  { icon: ShieldCheck, title: "Atendimento Profissional", desc: "Equipe treinada e preparada para cada cenário." },
  { icon: Lock, title: "Sigilo e Discrição", desc: "Seus dados e informações protegidos com total confidencialidade." },
  { icon: ClipboardCheck, title: "Análise Personalizada", desc: "Diagnóstico completo antes de qualquer ação." },
  { icon: Users, title: "Acompanhamento Especializado", desc: "Suporte contínuo em cada etapa do processo." },
  { icon: Eye, title: "Clareza no Processo", desc: "Você é informado de tudo, sem surpresas." },
  { icon: Lightbulb, title: "Foco em Solução Real", desc: "Resultados concretos, não promessas vazias." },
];

const AuthoritySection = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-display text-sm font-semibold tracking-widest uppercase mb-4 block">Compromisso & Confiança</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Autoridade que você pode <span className="text-gradient-gold">confiar</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-7 text-center"
            >
              <div className="glass-card-glow" />
              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                  <p.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
