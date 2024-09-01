import Calculator from "@/app/components/calculator";

const Home: React.FC = () => {
  return (
    <div>
    
        <title>Calculator</title>
        <meta name="description" content="Simple Calculator using Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      

      <main className="flex flex-col items-center justify-center min-h-screen">
        <Calculator />
      </main>
    </div>
  );
};

export default Home;