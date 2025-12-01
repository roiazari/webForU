import AccessibilityStatement from "./AccessibilityStatement";

const Footer = () => {
  return (
    <footer className="py-6 px-4 md:px-8 lg:px-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-2">
        <p className="text-sm text-foreground/70">
          © {new Date().getFullYear()} WebForU. כל הזכויות שמורות.
        </p>
        <AccessibilityStatement />
      </div>
    </footer>
  );
};

export default Footer;