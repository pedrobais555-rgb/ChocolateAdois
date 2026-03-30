import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const produtos = [
  { id: 1, nome: "Ovo de Chocolate ao Leite", preco: 12.9 },
  { id: 2, nome: "Ovo de Chocolate Branco", preco: 12.9 },
  { id: 3, nome: "Ovo de Chocolate Recheado", preco: 14.9 },
];

export default function LojaChocolate() {
  const [carrinho, setCarrinho] = useState([]);
  const [pagamento, setPagamento] = useState(null);

  const adicionarCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div className="min-h-screen bg-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-amber-900">🍫 Mundo do Chocolate</h1>
        <p className="text-lg mt-2 text-gray-700">Os melhores chocolates para você!</p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-amber-800 text-white text-center p-4 rounded-2xl shadow-lg mb-8"
      >
        <h2 className="text-2xl font-bold">🔥 PROMOÇÃO ESPECIAL 🔥</h2>
        <p className="text-xl">Leve 2 ovos por apenas R$ 19,90!</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {produtos.map((produto) => (
          <Card key={produto.id} className="rounded-2xl shadow-md">
            <CardContent className="p-4 text-center">
              <div className="text-6xl mb-4">🥚</div>
              <h3 className="text-xl font-semibold text-amber-900">{produto.nome}</h3>
              <p className="text-lg mt-2">R$ {produto.preco.toFixed(2)}</p>
              <Button
                className="mt-4 w-full bg-amber-900 text-white"
                onClick={() => adicionarCarrinho(produto)}
              >
                Adicionar ao Carrinho
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 p-6 bg-amber-100 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4 text-amber-900">🛒 Carrinho</h2>
        {carrinho.length === 0 ? (
          <p>Seu carrinho está vazio</p>
        ) : (
          <>
            {carrinho.map((item, index) => (
              <p key={index}>{item.nome} - R$ {item.preco.toFixed(2)}</p>
            ))}
            <p className="mt-4 font-bold">Total: R$ {total.toFixed(2)}</p>

            <div className="mt-4 flex gap-4">
              <Button
                className="bg-green-600 text-white"
                onClick={() => setPagamento("pix")}
              >
                Pagar com Pix
              </Button>

              <Button
                className="bg-blue-600 text-white"
                onClick={() => setPagamento("cartao")}
              >
                Pagar com Cartão
              </Button>
            </div>
          </>
        )}
      </div>

      {pagamento === "pix" && (
        <div className="mt-6 p-6 bg-white border rounded-2xl">
          <h3 className="text-xl font-bold text-amber-900">Pagamento via Pix</h3>
          <p className="mt-2">Chave Pix: seuemail@exemplo.com</p>
          <p className="text-sm text-gray-600">(Integração real pode ser feita com Mercado Pago ou Stripe)</p>
        </div>
      )}

      {pagamento === "cartao" && (
        <div className="mt-6 p-6 bg-white border rounded-2xl">
          <h3 className="text-xl font-bold text-amber-900">Pagamento com Cartão</h3>
          <input className="border p-2 w-full mt-2" placeholder="Número do cartão" />
          <input className="border p-2 w-full mt-2" placeholder="Nome no cartão" />
          <Button className="mt-4 w-full bg-amber-900 text-white">Finalizar Pagamento</Button>
        </div>
      )}

      <footer className="text-center mt-10 text-sm text-gray-600">
        © 2026 Mundo do Chocolate - Todos os direitos reservados
      </footer>
    </div>
  );
}

/*
PRÓXIMO PASSO (DOMÍNIO E HOSPEDAGEM):

1. Hospedagem recomendada:
- Vercel (grátis) → subir projeto React
- Hostinger ou GoDaddy (domínio pago)

2. Domínio exemplo:
- mundodochocolate.com.br

3. Integração REAL de pagamento:
- Mercado Pago (Pix + Cartão automático)
- Stripe (Cartão internacional)

Se quiser, posso configurar tudo isso pra você passo a passo.
*/
