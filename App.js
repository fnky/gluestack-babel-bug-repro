import { Box, GluestackUIStyledProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

export default function App() {
  return (
    <GluestackUIStyledProvider config={config}>
      <Box />
    </GluestackUIStyledProvider>
  );
}
