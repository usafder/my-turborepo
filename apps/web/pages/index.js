import { Button } from "ui";
import { foo } from "helpers"

export default function Web() {
  foo()

  return (
    <div>
      <h1>Web App</h1>
      <p>web app in a monorepo</p>
      <Button />
    </div>
  );
}
