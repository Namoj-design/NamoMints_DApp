import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import MintNFT from "./mintNFT";
import { useState, useEffect } from "react";

function App() {
  const currentAccount = useCurrentAccount();
  const [theme, setTheme] = useState("light-theme");

  // Apply theme dynamically
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light-theme" ? "dark-theme" : "light-theme");
  };

  return (
    <>
      {/* Header */}
      <Flex
        position="sticky"
        px="4"
        py="2"
        justify="between"
        align="center"
        style={{
          borderBottom: "1px solid var(--gray-a2)",
          background: theme === "light-theme" ? "#f0f4f8" : "#0f111a",
          transition: "background 0.3s ease",
          zIndex: 100,
          flexWrap: "wrap",
        }}
      >
        {/* Logo / Title */}
        <Box>
          <Heading>NamoMints</Heading>
        </Box>

        {/* Right Side: Dark Mode + ConnectButton */}
        <Flex
          gap="1rem"
          style={{
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={toggleTheme}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "1rem",
              border: "none",
              background: theme === "light-theme" ? "#facc15" : "#3b82f6",
              color: theme === "light-theme" ? "#111" : "#fff",
              fontWeight: 600,
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.3s ease",
            }}
          >
            {theme === "light-theme" ? "Dark Mode" : "Light Mode"}
          </button>

          <Box style={{ flexShrink: 0 }}>
            <ConnectButton />
          </Box>
        </Flex>
      </Flex>

      {/* Main Container */}
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "80vh",
          padding: "2rem 1rem",
        }}
      >
        <Container
          mt="5"
          pt="2"
          px="4"
          style={{
            background: theme === "light-theme" ? "#e0e7ff" : "#1e293b",
            minHeight: 500,
            borderRadius: "1rem",
            boxShadow: "0 8px 16px rgba(0,0,0,0.25)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            transition: "all 0.3s ease",
            width: "100%",
            maxWidth: 600,
          }}
        >
          {currentAccount ? (
            <MintNFT />
          ) : (
            <Heading style={{ textAlign: "center" }}>
              Please connect your wallet
            </Heading>
          )}
        </Container>

        {/* Action Buttons / Demo */}
        <Flex gap="1rem" style={{ marginTop: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
          <button style={{ borderRadius: "1rem", padding: "0.6rem 1.4rem", background: "#3b82f6", color: "#fff", fontWeight: 600 }}>
            Mint NFT
          </button>
          <button style={{ borderRadius: "1rem", padding: "0.6rem 1.4rem", background: "#facc15", color: "#111", fontWeight: 600 }}>
            View Portfolio
          </button>
          <button style={{ borderRadius: "1rem", padding: "0.6rem 1.4rem", background: "#10b981", color: "#fff", fontWeight: 600 }}>
            Send Tokens
          </button>
        </Flex>
      </Container>
    </>
  );
}

export default App;