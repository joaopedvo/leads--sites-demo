# Etec Assessoria Contábil — demonstração de redesign

Proposta visual para a Etec Assessoria Contábil (Castanhal/PA), no ar em
`/leads--sites-demo/etec-assessoria/`. Não é o site oficial da empresa.

## De onde veio o material

Extraído de assessoriaetec.com.br em 17/08/2026 e guardado fora deste
repositório, em `E:\sites\material\assessoria-etec\`. Os logos de clientes
foram fornecidos pela própria Etec.

Em `src/data/conteudo.ts` cada bloco está marcado:

- **VERBATIM** — texto do cliente, sem alteração
- **PROPOSTA** — escrito para o redesign, precisa do aval deles

## Cor

O site atual **não usa as cores do próprio logo**. Amostrando os pixels do
`logo-etec.png`, a marca é `#B01F24` (vermelho), `#641810` (vinho) e `#393B3C`
(grafite); o CSS em produção usa `#961E1D`, `#6A1F0F` e `#292B2C`. Três pares
que quase batem e nenhum que bate.

Este demo parte das cores do logo. É também o argumento de venda mais direto
da proposta.

## Referência

Estrutura e tipografia seguem o template Auria: rótulos em mono, manchete com
tracking negativo, painel escuro no miolo. A cor é da Etec — o outro demo
contábil da galeria (AS7) segue a mesma referência de forma acromática, e os
dois precisam se distinguir.

## Pendências para conversar com o cliente

- **Dois dos três depoimentos vêm truncados**, cortados no meio de uma frase
  (Mário Filho e Jéssica/Roberto). Aqui terminam na última frase completa; o
  que ficou de fora está anotado em `conteudo.ts`. Vale pedir os integrais.
- O depoimento da Açaí Sabor do Norte cita a **São João Polpas** — confirmar se
  é o mesmo grupo antes de publicar.
- Não existe versão vetorial do logo. Para aplicar em tamanho grande, precisa
  ser revetorizado.
