import CodeText from "./pages/modules/components/CodeText/CodeText";

export default function Home() {
  return (
    <main>
      <CodeText
        className="font-bold text-3xl border-b-2 border-cyan-400"
        preserveCursor={false}
      >
        WHATS AMT?
      </CodeText>
    </main>
  );
}
