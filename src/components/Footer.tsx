import { Link } from "react-router-dom";
import { themes, themeOrder } from "@/data/courses";

const Footer = () => {
  return (
    <footer className="relative border-t border-primary-foreground/10 bg-primary py-12 text-primary-foreground overflow-hidden">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-20 bottom-0 h-40 w-40 rounded-full bg-gold/[0.06] blur-3xl" />

      <div className="container relative">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-amoresa text-2xl tracking-wide">Célia Franz</p>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/65">
              Neuropsicanalista integrativa e educadora. Formações avançadas para
              terapeutas que buscam profundidade e método.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
              Formações
            </p>
            <ul className="flex flex-col gap-2">
              {themeOrder.map((key) => (
                <li key={key}>
                  <Link
                    to={`/${themes[key].slug}`}
                    className="text-sm text-primary-foreground/65 transition-colors duration-200 hover:text-primary-foreground hover:translate-x-1 inline-block"
                  >
                    {themes[key].title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
              Contato
            </p>
            <p className="text-sm text-primary-foreground/65">
              Entre em contato pelo WhatsApp para informações sobre cursos,
              eventos e agendamentos.
            </p>
          </div>
        </div>

        <div className="gold-divider mt-10" />
        <div className="pt-6 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Célia Franz. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
