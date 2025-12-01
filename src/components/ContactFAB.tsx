import { Phone, WhatsappLogo } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const phoneNumber = "972542412474";
const whatsappMessage = encodeURIComponent("שלום WebForU הגעתי אליכם דרך האתר ואני מתעניין ב...");

const ContactFAB = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="fixed bottom-4 left-4 z-50 h-14 w-14 rounded-full shadow-lg glow-blue"
          aria-label="צור קשר"
        >
          <Phone className="h-7 w-7" weight="fill" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto ml-4 mb-2" side="top" align="start">
        <div className="flex flex-col gap-2 p-2">
          <h4 className="font-medium text-center mb-2">בחר דרך ליצירת קשר</h4>
          <Button asChild className="w-full justify-center gap-2">
            <a
              href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappLogo size={20} weight="fill" />
              <span>וואטסאפ</span>
            </a>
          </Button>
          <Button asChild variant="outline" className="w-full justify-center gap-2">
            <a href={`tel:+${phoneNumber}`}>
              <Phone size={20} weight="fill" />
              <span>שיחת טלפון</span>
            </a>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ContactFAB;