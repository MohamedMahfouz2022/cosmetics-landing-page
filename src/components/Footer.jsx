import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-right">
          
          <div>
            <div className="text-2xl font-bold text-primary mb-4">
              عناية <span className="text-white">جمالك</span>
            </div>
            <p className="text-sm opacity-80 max-w-xs mx-auto md:mx-0">
              علامة تجارية رائدة في مجال العناية بالبشرة ومستحضرات التجميل، نؤمن بجمالك الطبيعي.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="#home" className="hover:text-primary transition-colors">الرئيسية</Link></li>
              <li><Link href="#products" className="hover:text-primary transition-colors">منتجاتنا</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors">من نحن</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">تواصل معنا</h4>
            <ul className="space-y-2 text-sm opacity-80" dir="ltr">
              <li className="text-right">هاتف: 01013495432</li>
              <li className="text-right">بريد: info@beauty-care.com</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 mt-8 text-center text-sm opacity-60">
          <p>© {new Date().getFullYear()} عناية جمالك. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
