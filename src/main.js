import { app } from "./application/app.js";
import { logger } from "./application/logging.js";

const port = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  logger.info(`Server started on port ${port}`);
});
