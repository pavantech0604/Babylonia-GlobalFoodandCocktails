import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/50 bg-[#fff8f5] mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="mb-8">
            <img src="/assets/logo.png" alt="Babylonia" className="h-16 md:h-20 object-contain transform scale-[1.8] origin-left" />
          </div>
          <p className="font-sans text-sm font-light text-muted-foreground leading-relaxed">
            Elevated heritage atop the city. Where ancient inspiration meets contemporary luxury cuisine and mixology.
          </p>
        </div>
        <div>
          <h4 className="font-sans text-xs font-bold tracking-widest uppercase text-foreground mb-4">Discover</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/menu" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/reservations" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                Reservations
              </Link>
            </li>
            <li>
              <Link href="/events" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                Events
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-xs font-bold tracking-widest uppercase text-foreground mb-4">Connect</h4>
          <ul className="space-y-2">
            <li>
              <a href="https://www.instagram.com/babylonia_blr/" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/babylonia.blr/" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                Facebook
              </a>
            </li>
            <li>
              <Link href="/auth" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                Guest Portal
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-xs font-bold tracking-widest uppercase text-foreground mb-4">Contact</h4>
          <p className="font-sans text-sm text-muted-foreground mb-1">babylonia.blr@gmail.com</p>
          <p className="font-sans text-sm text-muted-foreground mb-4">+91 77959 09998</p>
          <p className="font-sans text-xs text-muted-foreground pt-4 border-t border-border/30">
            © {new Date().getFullYear()} Babylonia Bangalore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
