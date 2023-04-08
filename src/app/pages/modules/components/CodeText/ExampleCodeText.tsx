import CodeText from "./CodeText";

const ExampleCodeText = () => {
  return (
    <div className="ml-1 rounded-2xl shadow-lg w-4/12 bg-gray-800">
      <CodeText className="font-bold text-3xl border-b-2 border-cyan-400">
        WHATS AMT?
      </CodeText>
      <CodeText preserveCursor={false}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui est hic
        doloribus ipsam laborum. Quisquam nam neque sunt dolore atque maxime
        vero adipisci ea amet, reprehenderit in modi error magnam.
      </CodeText>
    </div>
  );
};

export default ExampleCodeText;
