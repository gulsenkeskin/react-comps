import React from "react";
import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline className="mb-5">
          <GoBell></GoBell>
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload></GoCloudDownload>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase></GoDatabase>
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;
