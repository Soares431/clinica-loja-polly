export default function PagamentoErro() {
  return (
    <main className="max-w-lg mx-auto px-8 py-24 text-center">
      <h1 className="font-serif text-3xl text-brand-gray mb-4">Não foi possível pagar</h1>
      <p className="text-gray-600">
        Algo deu errado com o pagamento. Você pode tentar novamente.
      </p>
    </main>
  );
}