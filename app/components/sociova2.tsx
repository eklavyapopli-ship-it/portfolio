import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export function MacbookScroll1() {
  return (
    <div className="w-full overflow-hidden bg-black">
      <MacbookScroll
        title={
          <span>
           Built for Cloudflare deployments <br /> <span className="text-7xl">Nodemailer Alternative </span>
          </span>
        }
        
        src={`/humkind-mailer.png`}
        showGradient={false}
      />
    </div>
  );
}
// Peerlist logo

