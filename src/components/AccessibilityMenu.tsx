import { useState, useEffect } from "react";
import { Accessibility, Plus, Minus, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

type AccessibilityOptions = {
  fontSize: number;
  highContrast: boolean;
  grayscale: boolean;
  invertColors: boolean;
  readableFont: boolean;
  underlineLinks: boolean;
  highlightLinks: boolean;
  stopAnimations: boolean;
};

const INITIAL_OPTIONS: AccessibilityOptions = {
  fontSize: 100, // Percentage
  highContrast: false,
  grayscale: false,
  invertColors: false,
  readableFont: false,
  underlineLinks: false,
  highlightLinks: false,
  stopAnimations: false,
};

const AccessibilityMenu = () => {
  const [options, setOptions] = useState<AccessibilityOptions>(INITIAL_OPTIONS);

  useEffect(() => {
    try {
      const savedOptions = localStorage.getItem("accessibilityOptions");
      if (savedOptions) {
        setOptions(JSON.parse(savedOptions));
      }
    } catch (error) {
      console.error("Failed to load accessibility options:", error);
    }
  }, []);

  useEffect(() => {
    // Apply styles based on options
    document.documentElement.style.fontSize = `${options.fontSize}%`;
    document.body.dataset.highContrast = String(options.highContrast);
    document.documentElement.dataset.grayscale = String(options.grayscale);
    document.documentElement.dataset.invertColors = String(options.invertColors);
    document.body.dataset.readableFont = String(options.readableFont);
    document.body.dataset.underlineLinks = String(options.underlineLinks);
    document.body.dataset.highlightLinks = String(options.highlightLinks);
    document.body.dataset.stopAnimations = String(options.stopAnimations);

    // Save options to localStorage
    try {
      localStorage.setItem("accessibilityOptions", JSON.stringify(options));
    } catch (error) {
      console.error("Failed to save accessibility options:", error);
    }
  }, [options]);

  const handleOptionToggle = (option: keyof AccessibilityOptions) => {
    setOptions((prev) => ({ ...prev, [option]: !prev[option] }));
  };

  const handleFontSizeChange = (amount: number) => {
    setOptions((prev) => ({
      ...prev,
      fontSize: Math.max(50, Math.min(200, prev.fontSize + amount)),
    }));
  };

  const resetOptions = () => {
    setOptions(INITIAL_OPTIONS);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full shadow-lg glow-blue"
          aria-label="Accessibility Menu"
        >
          <Accessibility className="h-7 w-7" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 mr-4 mb-2" side="top" align="end">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">תפריט נגישות</h4>
            <p className="text-sm text-muted-foreground">
              התאם את תצוגת האתר לצרכים שלך.
            </p>
          </div>
          <Separator />
          <div className="grid gap-2">
            <Label>גודל גופן</Label>
            <div className="flex items-center gap-2">
              <Button size="icon" onClick={() => handleFontSizeChange(10)}>
                <Plus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center font-bold">{options.fontSize}%</span>
              <Button size="icon" onClick={() => handleFontSizeChange(-10)}>
                <Minus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="high-contrast">ניגודיות גבוהה</Label>
            <Switch id="high-contrast" checked={options.highContrast} onCheckedChange={() => handleOptionToggle("highContrast")} />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="grayscale">גווני אפור</Label>
            <Switch id="grayscale" checked={options.grayscale} onCheckedChange={() => handleOptionToggle("grayscale")} />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="invert-colors">היפוך צבעים</Label>
            <Switch id="invert-colors" checked={options.invertColors} onCheckedChange={() => handleOptionToggle("invertColors")} />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="readable-font">גופן קריא</Label>
            <Switch id="readable-font" checked={options.readableFont} onCheckedChange={() => handleOptionToggle("readableFont")} />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="underline-links">קו תחתון לקישורים</Label>
            <Switch id="underline-links" checked={options.underlineLinks} onCheckedChange={() => handleOptionToggle("underlineLinks")} />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="highlight-links">הדגשת קישורים</Label>
            <Switch id="highlight-links" checked={options.highlightLinks} onCheckedChange={() => handleOptionToggle("highlightLinks")} />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="stop-animations">עצירת אנימציות</Label>
            <Switch id="stop-animations" checked={options.stopAnimations} onCheckedChange={() => handleOptionToggle("stopAnimations")} />
          </div>
          <Separator />
            ההגדרות נשמרות לכניסה הבאה שלך
          <Button variant="outline" onClick={resetOptions}>
            <RefreshCw className="mr-2 h-4 w-4" />
            אפס הגדרות
          </Button>
        
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AccessibilityMenu;