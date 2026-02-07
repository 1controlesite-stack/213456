import { Link } from "react-router-dom";
import { themes, themeOrder } from "@/data/courses";

const Footer = () => {
  return (
    <footer className="border-t border-primary-foreground/10 bg-primary py-12 text-primary-foreground">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-serif text-lg font-semibold">Célia Franz</p>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
              Terapeuta integrativa e educadora. Formações avançadas para terapeutas que buscam profundidade e método.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Formações</p>
            <ul className="flex flex-col gap-2">
              {themeOrder.map((key) => (
                <li key={key}>
                  <Link
                    to={`/${themes[key].slug}`}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-gold"
                  >
                    {themes[key].title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Contato</p>
            <p className="text-sm text-primary-foreground/70">
              Entre em contato pelo WhatsApp para informações sobre cursos, eventos e agendamentos.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Célia Franz. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
