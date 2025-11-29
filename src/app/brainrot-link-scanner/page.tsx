import type { Metadata } from "next";
import LinkScannerClient from "./LinkScannerClient";

export const metadata: Metadata = {
  title: "Brainrot Link Scanner | Check Game Links Safely | StealABrainrot",
  description: "Paste any Brainrot or game-related link and get an instant risk score. Protect your session from scams, phishing, and suspicious redirects.",
  openGraph: {
    title: "Brainrot Link Scanner | Check Game Links Safely",
    description: "Paste any Brainrot or game-related link and get an instant risk score. Protect your session from scams, phishing, and suspicious redirects.",
    url: "https://stealabrainrot.games/brainrot-link-scanner",
    siteName: "StealABrainrot",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brainrot Link Scanner | Check Game Links Safely",
    description: "Paste any Brainrot or game-related link and get an instant risk score.",
  },
};

export default function BrainrotLinkScannerPage() {
  return <LinkScannerClient />;
}
