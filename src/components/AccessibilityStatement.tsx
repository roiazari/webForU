import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "./ui/button";

const AccessibilityStatement = () => {
  const lastUpdatedDate = new Date().toLocaleDateString("he-IL");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="p-0 h-auto text-sm text-foreground/70 hover:text-primary">
          הצהרת נגישות
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] bg-white text-black" dir="rtl">
        <DialogHeader className="text-right pr-8">
          <DialogTitle className="text-black text-right">הצהרת נגישות</DialogTitle>
          <DialogDescription className="text-right">
            עודכן לאחרונה: {lastUpdatedDate}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4 text-sm text-right">
            <h3 className="font-bold text-black">מבוא</h3>
            <p>
              אנו ב-WebForU רואים חשיבות עליונה בהנגשת אתר האינטרנט שלנו לאנשים עם מוגבלויות, על מנת לאפשר לכלל האוכלוסייה, לרבות אנשים עם מוגבלויות, לגלוש בו בקלות ובנוחות. האתר הונגש בהתאם להוראות חוק שוויון זכויות לאנשים עם מוגבלות (התשנ"ח-1998) והתקנות שהותקנו מכוחו
            </p>
            <h3 className="font-bold text-black">רמת הנגישות</h3>
            <p>
              האתר עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013.
              התאמות הנגישות בוצעו עפ"י המלצות התקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת AA ומסמך WCAG2.0 הבינלאומי
            </p>
            <h3 className="font-bold text-black">התאמות שבוצעו באתר</h3>
            <ul className="list-disc list-outside space-y-2 text-right pr-6">
              <li>
                <strong> ניווט:</strong>                האתר מאפשר ניווט פשוט וברור באמצעות מקלדת בלבד  

              </li>
              <li>
                <strong>תוכן:</strong> התכנים באתר כתובים בשפה פשוטה וברורה
              </li>
              <li>
                <strong>תצוגה:</strong> האתר מותאם לצפייה בדפדפנים מודרניים ובגדלי מסך שונים (רספונסיבי)
              </li>
              <li>
                <strong>תמונות:</strong> לתמונות באתר נוסף טקסט חלופי (alt text) עבור טכנולוגיות מסייעות
              </li>
              <li>
                <strong>תפריט נגישות:</strong> באתר מוצב תפריט נגישות המאפשר, בין היתר, שינוי גודל גופן, מעבר למצב ניגודיות גבוהה, גווני אפור ועוד
              </li>
            </ul>
            <h3 className="font-bold text-black">דרכי פנייה לבקשות והצעות שיפור בנושא נגישות</h3>
            <p>
              אנו ממשיכים להשקיע מאמצים בשיפור נגישות האתר כחלק ממחויבותנו לאפשר שימוש בו עבור כלל האוכלוסייה, כולל אנשים עם מוגבלויות.
              אם נתקלתם בבעיית נגישות או יש לכם הצעה לשיפור, נשמח לקבל את פנייתכם
            </p>
            <h3 className="font-bold text-black">פרטי רכז הנגישות</h3>
            <ul className="list-none space-y-1 text-right">
              <li><strong>שם:</strong> רועי עזרי</li>
              <li>
               <a href="mailto:contact@webforu.dev" className="text-blue-600 hover:underline">roiazari148@gmail.com</a> <strong>:דוא"ל</strong> 
              </li>
            </ul>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default AccessibilityStatement;