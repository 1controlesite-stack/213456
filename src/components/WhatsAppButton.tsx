import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppLink } from "@/data/courses";

interface WhatsAppButtonProps {
  courseName?: string;
}

const WhatsAppButton = ({ courseName }: WhatsAppButtonProps) => {
  return (
    <a
      href={getWhatsAppLink(courseName)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className="whatsapp-pulse fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-whatsapp focus:ring-offset-2"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
