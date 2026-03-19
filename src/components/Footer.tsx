import movyLogo from "@/assets/movy-logo.png";
import { MessageCircle, Instagram } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511914860099?text=Olá!%20Vim%20pelo%20site%20da%20Movy%20Soluções%20Financeira%20e%20quero%20atendimento.";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src={movyLogo} alt="Movy Soluções Financeira" className="h-10 w-auto" />
            <p className="text-sm text-muted-foreground font-body">Movy Soluções Financeira</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary font-body hover:underline"
            >
              <MessageCircle className="w-4 h-4" />
              (11) 91486-0099
            </a>
            <a
              href="https://www.instagram.com/movysolucoes12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary font-body hover:underline"
            >
              <Instagram className="w-4 h-4" />
              @movysolucoes12
            </a>
          </div>

          <p className="text-xs text-muted-foreground font-body text-center md:text-right max-w-xs">
            Seu crédito, sua tranquilidade. Atendimento com sigilo, estratégia e respeito.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} Movy Soluções Financeira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
