import { Theme } from "@radix-ui/themes";
import Demo from "./components/Demo";

export default function Home() {
  return (
    <html>
      <body>
        <Theme>
          <Demo />
        </Theme>
      </body>
    </html>
  );
}
