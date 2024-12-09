export default function HelloWorld({ color }: { color: string }) {
  return (
    <>
      <h1 className={`text-3xl font-bold text-${color}`}>Hello world!</h1>
    </>
  );
}
